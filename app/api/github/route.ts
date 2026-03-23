export async function GET() {
    try {
        const res = await fetch("https://api.github.com/users/KyleFick/repos", {
            headers: {
                Accept: "application/vnd.github+json",
            },
        });

        if (!res.ok) {
            return Response.json({ error: "GitHub API error" }, { status: 500 });
        }

        const data = await res.json();

        // 🛑 Make sure it's an array
        if (!Array.isArray(data)) {
            console.error("Unexpected GitHub response:", data);
            return Response.json([], { status: 200 });
        }

        const projects = data.slice(0, 4).map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
        }));

        return Response.json(projects);
    } catch (error) {
        console.error("Server error:", error);
        return Response.json([], { status: 500 });
    }
}