import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre{
    id: number, 
    name: string,
}

interface FetechGenreResponse{
    count: number,
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        apiClient.get<FetechGenreResponse>('/genres', { signal: controller.signal })
            .then(res => {
                setGenre(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                if(err instanceof CanceledError) return;
                setError(err.message);
            })

        return () => controller.abort();

    },[]);

    return {genres, error, isLoading};
}

export default useGenres;