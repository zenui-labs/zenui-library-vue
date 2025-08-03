import {ref, watchEffect} from "vue";

export function useGitHubStars(owner, repo) {
    const stars = ref(0);
    const loading = ref(true);

    watchEffect(() => {
        if (!owner || !repo) return;

        const storageKey = `github-stars-${owner}-${repo}`;
        const cachedData = localStorage.getItem(storageKey);

        if (cachedData) {
            const {stars: cachedStars, timestamp} = JSON.parse(cachedData);
            const currentTime = Date.now();
            const timeDiff = currentTime - timestamp;
            const oneDayInMs = 24 * 60 * 60 * 1000;

            if (timeDiff < oneDayInMs) {
                stars.value = cachedStars;
                loading.value = false;
                return;
            }
        }

        loading.value = true;

        fetch(`https://api.github.com/repos/${owner}/${repo}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.stargazers_count !== undefined) {
                    stars.value = data.stargazers_count;

                    localStorage.setItem(
                        storageKey,
                        JSON.stringify({
                            stars: data.stargazers_count,
                            timestamp: Date.now(),
                        })
                    );
                }
            })
            .catch((error) => {
                console.error("Error fetching GitHub stars:", error);
                if (cachedData) {
                    const {stars: cachedStars} = JSON.parse(cachedData);
                    stars.value = cachedStars;
                }
            })
            .finally(() => {
                loading.value = false;
            });
    });

    return {stars, loading};
}
