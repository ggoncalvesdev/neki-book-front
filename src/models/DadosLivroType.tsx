export type DadosLivroType = {
    id?: string;
    etag?: string;
    volumeInfo?: {
        title?:string;
        subtitle?:string;
        authors?:[string
        ];
        publisher?:string ;
		publishedDate?: string;
        description?:string;
        pageCount?:number;
		categories?: [
			string
		],
        imageLinks?:{
            thumbnail?:string;
        }
    };
};