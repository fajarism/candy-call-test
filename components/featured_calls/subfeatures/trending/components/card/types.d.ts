export type VerifiedArtistData = {
    text: string;
    duration: string;
    numberOfUsers: string;
}

export type VerifiedArtistProps = VerifiedArtistData & {
    index: number;
    isPrimary?: boolean;
}