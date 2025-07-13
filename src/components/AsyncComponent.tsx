import { useFetch } from "../hooks/useFetch";

export const AsyncComponent = () => {
    const { loading, data, error } = useFetch("http://localhost:3000/data", {
        headers: { Accept: "application/json; charset=UTF-8" },
    });
    return (
        <>
            <div>
                {loading && <div>Chargement ...</div>}
                {error && (
                    <div className="error">
                        <p className="error-text">{error.toString()}</p>
                    </div>
                )}

                {data && (
                    <div>
                        <ul>
                            {data.map((post) => (
                                <li key={post.id}>
                                    <h4>{post.title}</h4>
                                    <p>
                                        {"id: "}
                                        <i>{post.id}</i> {"- userId : "}{" "}
                                        {post.userId}
                                    </p>
                                    <p>{post.body}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};