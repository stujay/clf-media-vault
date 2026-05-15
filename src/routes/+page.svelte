<script lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { 
        faCopy, faCode, faSearch, faUpload, faPlay, faImage, faFile, 
        faCheck, faSpinner, faFolderOpen, faCalendarAlt, faHardDrive, 
        faMoon, faSun, faPen
    } from '@fortawesome/free-solid-svg-icons';
    import { enhance } from '$app/forms';
    import { fade, slide } from 'svelte/transition';
    import { onMount } from 'svelte';

    let { data } = $props();
    
    // --- State ---
    let searchQuery = $state("");
    let uploading = $state(false);
    let dragActive = $state(false);
    let toast = $state({ show: false, message: '', type: 'success' });
    let isDark = $state(true);
    let renamingAsset = $state<{oldKey: string, newKey: string} | null>(null);

    // Filtering State
    type Category = 'All' | 'Images' | 'Videos' | 'Documents' | 'Other';
    let activeCategory = $state<Category>('All');
    let activeExtension = $state<string | null>(null);

    // Reset extension sub-filter when category changes
    $effect(() => {
        activeCategory;
        activeExtension = null;
    });

    onMount(() => {
        isDark = document.documentElement.classList.contains('dark');
    });

    function toggleTheme() {
        isDark = !isDark;
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    // --- Data Definitions & Helpers ---

    const CATEGORY_MAP = {
        Images: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'],
        Videos: ['mp4', 'webm', 'ogg', 'mov', 'ts', 'm3u8', 'avi', 'mkv'],
        Documents: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'txt', 'csv', 'md']
    };

    function getCategoryForExt(ext: string): Category {
        const e = ext.toLowerCase();
        if (CATEGORY_MAP.Images.includes(e)) return 'Images';
        if (CATEGORY_MAP.Videos.includes(e)) return 'Videos';
        if (CATEGORY_MAP.Documents.includes(e)) return 'Documents';
        return 'Other';
    }

    function formatBytes(bytes: number, decimals = 1) {
        if (!+bytes) return '0 B';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    }

    function formatDate(dateString: string) {
        if (!dateString) return 'Unknown';
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
    }

    function parseAssetKey(key: string) {
        const parts = key.split('/');
        const filename = parts.pop() || key;
        const path = parts.length > 0 ? parts.join('/') + '/' : '/';
        const extension = filename.split('.').pop()?.toLowerCase() || 'file';
        return { filename, path, extension };
    }

    function getEmailHtml(url: string) {
        return `<img src="${url}" alt="" style="display:block; width:100%; max-width:600px; height:auto;">`;
    }

    // --- Interactions ---

    function triggerToast(message: string) {
        toast = { show: true, message, type: 'success' };
        setTimeout(() => { if (toast.message === message) toast.show = false; }, 3000);
    }

    /**
     * Bulletproof copy function for both HTTPS and HTTP (Tailscale/Local)
     */
    function copyToClipboard(text: string, type: string) {
        // Attempt the modern API first
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text)
                .then(() => triggerToast(`${type} copied`))
                .catch(() => fallbackCopy(text, type));
        } else {
            fallbackCopy(text, type);
        }
    }

    function fallbackCopy(text: string, type: string) {
        try {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            
            // Ensure it's not visible but part of the DOM
            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            textArea.style.top = "0";
            document.body.appendChild(textArea);
            
            textArea.focus();
            textArea.select();
            
            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);
            
            if (successful) {
                triggerToast(`${type} copied (Legacy)`);
            } else {
                throw new Error('Copy command failed');
            }
        } catch (err) {
            console.error('Fallback copy failed:', err);
            triggerToast(`Failed to copy ${type}`);
            // Last resort: prompt the user to copy manually
            window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
        }
    }

    function handleDrag(e: DragEvent, active: boolean) {
        e.preventDefault(); e.stopPropagation(); dragActive = active;
    }

    function handleDrop(e: DragEvent) {
        e.preventDefault(); e.stopPropagation(); dragActive = false;
        if (e.dataTransfer?.files?.length) {
            const fileInput = document.getElementById('file-upload') as HTMLInputElement;
            fileInput.files = e.dataTransfer.files;
            fileInput.form?.requestSubmit();
        }
    }

    // --- Derived Pipeline ---

    const processedAssets = $derived(
        data.assets.map(asset => {
            const parsed = parseAssetKey(asset.key);
            return {
                ...asset,
                ...parsed,
                category: getCategoryForExt(parsed.extension),
                formattedSize: formatBytes(asset.size || 0),
                formattedDate: formatDate(asset.lastModified)
            };
        })
    );

    const categoryFilteredAssets = $derived(
        processedAssets.filter(asset => {
            const matchesSearch = asset.key.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'All' || asset.category === activeCategory;
            return matchesSearch && matchesCategory;
        })
    );

    const availableExtensions = $derived([...new Set(categoryFilteredAssets.map(a => a.extension))].sort());

    const finalAssets = $derived(
        categoryFilteredAssets
            .filter(asset => !activeExtension || asset.extension === activeExtension)
            .sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime())
    );

</script>

<svelte:head>
    <title>Media Vault | Sovereign CDN</title>
</svelte:head>

{#if toast.show}
    <div transition:slide={{ duration: 200 }} class="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-lg flex items-center gap-3 border border-border text-sm font-medium">
        <FontAwesomeIcon icon={faCheck} class="text-green-500" />
        {toast.message}
    </div>
{/if}

<main class="min-h-screen pb-24">
    <!-- Header Area -->
    <header class="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-40">
        <div class="max-w-[1600px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex items-center gap-4">
                <div>
                    <h1 class="text-xl font-semibold tracking-tight">Media Vault</h1>
                    <p class="text-muted-foreground text-[10px] uppercase tracking-wider font-medium">Sovereign CDN Manager</p>
                </div>
            </div>

            <div class="flex-1 w-full max-w-md mx-8 relative hidden md:block">
                <FontAwesomeIcon icon={faSearch} class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm" />
                <input 
                    type="text" bind:value={searchQuery} placeholder="Search by prefix or filename..." 
                    class="w-full bg-secondary/50 border border-border rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background transition-all"
                />
            </div>

            <div class="flex items-center gap-4">
                <div class="text-right hidden lg:block">
                    <div class="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Edge Network</div>
                    <div class="text-xs font-mono bg-secondary px-2 py-1 rounded text-foreground">media.crackinglanguage.com</div>
                </div>
                <button onclick={toggleTheme} class="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground" aria-label="Toggle Theme">
                    <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
                </button>
            </div>
        </div>
    </header>

    <div class="max-w-[1600px] mx-auto px-6 mt-8">
        
        <!-- Dropzone Area -->
        <section class="mb-12">
            <form 
                method="POST" action="?/upload" enctype="multipart/form-data" 
                use:enhance={() => {
                    uploading = true;
                    return async ({ update, result }) => {
                        uploading = false;
                        if (result.type === 'success') triggerToast(`Successfully uploaded ${result.data?.count || 1} asset(s)`);
                        else triggerToast('Upload failed');
                        update();
                    };
                }}
                class="group relative border-2 border-dashed rounded-xl transition-all duration-300 flex flex-col items-center justify-center p-10 bg-card overflow-hidden
                    {dragActive ? 'border-ring bg-secondary/50' : 'border-border hover:border-muted-foreground/50'}"
                ondragenter={(e) => handleDrag(e, true)} ondragleave={(e) => handleDrag(e, false)}
                ondragover={(e) => handleDrag(e, true)} ondrop={handleDrop}
            >
                <input 
                    id="file-upload" type="file" name="file" multiple
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                    onchange={(e) => { if (e.currentTarget.files?.length) e.currentTarget.form?.requestSubmit(); }}
                    disabled={uploading}
                />
                
                <div class="relative z-20 text-center space-y-4 pointer-events-none">
                    <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-muted-foreground group-hover:text-foreground group-hover:bg-accent transition-colors duration-300">
                        <FontAwesomeIcon icon={uploading ? faSpinner : faUpload} spin={uploading} class="text-2xl" />
                    </div>
                    <div>
                        <h3 class="text-base font-medium">{uploading ? 'Transmitting batch to S3...' : 'Drag & Drop Multiple Assets'}</h3>
                        <p class="text-sm text-muted-foreground mt-1">or click to browse</p>
                    </div>
                </div>
                
                <div class="relative z-30 mt-6" onclick={(e) => e.stopPropagation()}>
                    <div class="flex items-center gap-2 bg-background border border-border rounded-md px-3 py-1.5 focus-within:ring-2 focus-within:ring-ring transition-shadow">
                        <FontAwesomeIcon icon={faFolderOpen} class="text-muted-foreground text-sm" />
                        <input type="text" name="prefix" placeholder="Target Prefix (e.g. mailers/)" class="bg-transparent border-none outline-none text-sm w-48 font-mono" />
                    </div>
                </div>
            </form>
        </section>

        <!-- Filters & Navigation -->
        <div class="sticky top-[73px] z-30 bg-background/95 backdrop-blur pt-2 pb-4 mb-6 border-b border-border">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <nav class="flex space-x-1 bg-secondary/50 p-1 rounded-lg self-start">
                    {#each ['All', 'Images', 'Videos', 'Documents', 'Other'] as category}
                        <button onclick={() => activeCategory = category as Category} class="px-4 py-1.5 text-sm font-medium rounded-md transition-all {activeCategory === category ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-background/50'}">{category}</button>
                    {/each}
                </nav>

                {#if availableExtensions.length > 0}
                    <div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                        <span class="text-xs text-muted-foreground font-medium uppercase tracking-wider mr-2">Ext:</span>
                        <button onclick={() => activeExtension = null} class="px-2.5 py-1 text-xs rounded-full border transition-colors {activeExtension === null ? 'bg-primary text-primary-foreground border-primary' : 'bg-transparent border-border text-muted-foreground hover:border-foreground'}">All</button>
                        {#each availableExtensions as ext}
                            <button onclick={() => activeExtension = ext} class="px-2.5 py-1 text-xs uppercase rounded-full border transition-colors {activeExtension === ext ? 'bg-primary text-primary-foreground border-primary' : 'bg-transparent border-border text-muted-foreground hover:border-foreground'}">{ext}</button>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>

        <!-- Asset Grid -->
        <section>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {#each finalAssets as asset (asset.key)}
                    <article class="group flex flex-col bg-card border border-border rounded-lg hover:border-ring/50 hover:shadow-md transition-all duration-300 relative overflow-hidden">
                        
                        <div class="aspect-square bg-secondary/30 relative flex items-center justify-center border-b border-border overflow-hidden">
                            <div class="absolute inset-0 opacity-[0.05] dark:opacity-[0.02]" style="background-image: linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%); background-size: 10px 10px; background-position: 0 0, 0 5px, 5px -5px, -5px 0px;"></div>
                            
                            {#if asset.category === 'Images'}
                                <img src={asset.url} alt={asset.filename} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-10" loading="lazy" />
                            {:else if asset.category === 'Videos'}
                                <FontAwesomeIcon icon={faPlay} class="text-3xl text-muted-foreground/30 group-hover:text-primary/50 transition-colors duration-300 relative z-10" />
                            {:else}
                                <FontAwesomeIcon icon={faFile} class="text-3xl text-muted-foreground/30 group-hover:text-primary/50 transition-colors duration-300 relative z-10" />
                            {/if}

                            <div class="absolute top-2 right-2 z-20 bg-background/80 backdrop-blur px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider text-foreground uppercase border border-border shadow-sm">
                                {asset.extension}
                            </div>
                            
                            <!-- Hover Actions -->
                            <div class="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 flex flex-col items-center justify-center gap-2 p-4 backdrop-blur-sm">
                                <button onclick={() => copyToClipboard(asset.url, 'URL')} class="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-medium py-1.5 rounded transition-colors shadow-sm">
                                    <FontAwesomeIcon icon={faCopy} class="mr-1.5" /> URL
                                </button>
                                {#if asset.category === 'Images'}
                                    <button onclick={() => copyToClipboard(getEmailHtml(asset.url), 'HTML')} class="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-medium py-1.5 rounded transition-colors shadow-sm">
                                        <FontAwesomeIcon icon={faCode} class="mr-1.5" /> HTML
                                    </button>
                                {/if}
                                <button onclick={() => renamingAsset = {oldKey: asset.key, newKey: asset.key}} class="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-medium py-1.5 rounded transition-colors shadow-sm mt-1">
                                    <FontAwesomeIcon icon={faPen} class="mr-1.5" /> Move
                                </button>
                            </div>
                        </div>

                        <div class="p-3 flex flex-col flex-grow justify-between gap-3">
                            <div>
                                <div class="text-[10px] text-muted-foreground font-mono truncate mb-0.5" title={asset.path}>{asset.path}</div>
                                <h3 class="text-sm font-medium text-foreground line-clamp-1" title={asset.filename}>{asset.filename}</h3>
                            </div>
                            <div class="flex items-center justify-between text-[10px] text-muted-foreground font-medium pt-2 border-t border-border/50">
                                <span title="Size">{asset.formattedSize}</span>
                                <span title="Date">{asset.formattedDate}</span>
                            </div>
                        </div>
                    </article>
                {/each}
                
                {#if finalAssets.length === 0}
                    <div class="col-span-full py-20 text-center">
                        <FontAwesomeIcon icon={faSearch} class="text-4xl text-muted-foreground/30 mb-3" />
                        <p class="text-muted-foreground text-sm font-medium">No assets found.</p>
                    </div>
                {/if}
            </div>
        </section>
    </div>
</main>

<!-- Rename Modal -->
{#if renamingAsset}
    <div transition:fade={{ duration: 150 }} class="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
        <form method="POST" action="?/rename" use:enhance={() => {
            return async ({ update, result }) => {
                if (result.type === 'success') {
                    triggerToast('Asset moved successfully');
                    renamingAsset = null;
                } else {
                    triggerToast('Failed to move asset');
                }
                update();
            };
        }} class="bg-card border border-border p-6 rounded-lg shadow-xl max-w-lg w-full relative">
            <h3 class="text-lg font-medium mb-5">Move / Rename Asset</h3>
            <input type="hidden" name="oldKey" value={renamingAsset.oldKey} />
            <div class="space-y-4">
                <div>
                    <label class="text-xs text-muted-foreground block mb-1 uppercase tracking-wider font-medium">Current S3 Key</label>
                    <div class="text-sm font-mono bg-secondary/50 p-2.5 rounded border border-border text-muted-foreground break-all">{renamingAsset.oldKey}</div>
                </div>
                <div>
                    <label class="text-xs text-foreground block mb-1 uppercase tracking-wider font-medium">New Target Path & Filename</label>
                    <div class="relative">
                        <input type="text" name="newKey" bind:value={renamingAsset.newKey} class="w-full bg-background border border-border rounded p-2.5 text-sm font-mono focus:ring-2 focus:ring-ring outline-none transition-shadow" autofocus />
                    </div>
                    <p class="text-[10px] text-muted-foreground mt-2">Example: Change <code>mailers/image.jpg</code> to <code>mailers/2024/new_image.jpg</code> to move it to a new folder.</p>
                </div>
            </div>
            <div class="mt-8 flex justify-end gap-3 border-t border-border pt-4">
                <button type="button" onclick={() => renamingAsset = null} class="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded transition-colors">Cancel</button>
                <button type="submit" class="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity shadow-sm">Save Changes</button>
            </div>
        </form>
    </div>
{/if}
