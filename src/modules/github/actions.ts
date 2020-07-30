import { createAsyncAction } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

// export const getUserProfile = createStandardAction(GET_USER_PROFILE)();
// export const getUserProfileSuccess = createStandardAction(
// 	GET_USER_PROFILE_SUCCESS
// )<GithubProfile>();
// export const getUserProfileError = createStandardAction(GET_USER_PROFILE_ERROR)<
// 	AxiosError
// >();

// typesafe-actions에 createAsyncAction라는 유틸함수를 이용하면 다음과 같이 리팩토링 할 수 있다.
export const getUserProfileAsync = createAsyncAction(
	GET_USER_PROFILE,
	GET_USER_PROFILE_SUCCESS,
	GET_USER_PROFILE_ERROR
)<undefined, GithubProfile, AxiosError>();
