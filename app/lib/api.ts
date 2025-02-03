export async function fetchAPI(endpoint: string) {
    const res = await fetch(`https://api.samramprojects.com/api/${endpoint}`, {
        next: { revalidate: 3600 }, // 1 saat cache
        headers: {
            'Accept': 'application/json',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
        }
    });

    if (!res.ok) throw new Error('API request failed');
    return res.json();
} 