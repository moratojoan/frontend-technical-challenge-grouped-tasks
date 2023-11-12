interface ApiResponseOk<T> {
  data: T;
  error: null;
}
interface ApiResponseError<E> {
  data: null;
  error: E;
}

export type ApiResponse<T, E> = ApiResponseOk<T> | ApiResponseError<E>;

export interface ApiDefaultError {
  message: string;
}
