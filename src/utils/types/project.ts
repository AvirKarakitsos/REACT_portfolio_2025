type ContentType = {
    language: string,
    text: string
}

export type ProjectType = {
    _id: number,
    title: string,
    date: string,
    imageUrl: string,
    imageUrlShort: string,
    video: string,
    tags: string,
    content: ContentType[]
    link: string,
    category: string,
};

export type CategoryType = {
    _id: number,
    name: 'all' | 'fullstack' | 'react' | 'node',
    color?: string
}

export type ObjectModal = {
    isOpen: boolean, 
    videoId: null | number
}