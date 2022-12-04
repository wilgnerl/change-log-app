export interface HttpRequest{
    body?: any
    header?: any
    headers?: any
    params?: any
}

export interface HttpResponse{
    body?: any
    statusCode: number
}