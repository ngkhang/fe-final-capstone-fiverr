// Define the key constants
export const accessTokenKey = 'accessToken';
export const tokenCybersoftKey = 'tokenCybersoft';

export const DOMAIN = 'https://fiverrnew.cybersoft.edu.vn';
export const TOKEN_CYBERSOFT = process.env.NEXT_PUBLIC_TOKEN_CYBERSOFT;

// Define the base endpoints
const AUTH_BASE = '/api/auth';
const COMMENTS_BASE = '/api/binh-luan';
const JOB_CATEGORY_DETAILS_BASE = '/api/chi-tiet-loai-cong-viec';
const JOBS_BASE = '/api/cong-viec';
const JOB_CATEGORIES_BASE = '/api/loai-cong-viec';
const USERS_BASE = '/api/users';
const SKILLS_BASE = '/api/skill';
const JOB_HIRE_BASE = '/api/thue-cong-viec';

// Define the specific endpoints for each module
/**
 * Auth API endpoints
 */
export const AuthApi = {
  SIGNUP: `${AUTH_BASE}/signup`,
  SIGNIN: `${AUTH_BASE}/signin`,
};

/**
* Comments API endpoints
*/
export const CommentsApi = {
  GET_ALL: COMMENTS_BASE,
  CREATE: COMMENTS_BASE,
  UPDATE: (id: string) => `${COMMENTS_BASE}/${id}`,
  DELETE: (id: string) => `${COMMENTS_BASE}/${id}`,
  GET_BY_JOB: (jobId: string) => `${COMMENTS_BASE}/lay-binh-luan-theo-cong-viec/${jobId}`,
};

/**
* Job Category Details API endpoints
*/
export const JobCategoryDetailsApi = {
  GET_ALL: JOB_CATEGORY_DETAILS_BASE,
  CREATE: JOB_CATEGORY_DETAILS_BASE,
  GET_PAGINATED_SEARCH: `${JOB_CATEGORY_DETAILS_BASE}/phan-trang-tim-kiem`,
  GET_BY_ID: (id: string) => `${JOB_CATEGORY_DETAILS_BASE}/${id}`,
  UPDATE: (id: string) => `${JOB_CATEGORY_DETAILS_BASE}/${id}`,
  DELETE: (id: string) => `${JOB_CATEGORY_DETAILS_BASE}/${id}`,
  ADD_GROUP: `${JOB_CATEGORY_DETAILS_BASE}/them-nhom-chi-tiet-loai`,
  UPLOAD_GROUP_IMAGE: (groupId: string) => `${JOB_CATEGORY_DETAILS_BASE}/upload-hinh-nhom-loai-cong-viec/${groupId}`,
  UPDATE_GROUP: (id: string) => `${JOB_CATEGORY_DETAILS_BASE}/sua-nhom-chi-tiet-loai/${id}`,
};


/**
* Jobs API endpoints
*/
export const JobsApi = {
  GET_ALL: JOBS_BASE,
  CREATE: JOBS_BASE,
  GET_PAGINATED_SEARCH: (pageIndex?:number, pageSize?:number) => `${JOBS_BASE}/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}`,
  GET_BY_ID: (id: string) => `${JOBS_BASE}/${id}`,
  UPDATE: (id: string) => `${JOBS_BASE}/${id}`,
  DELETE: (id: string) => `${JOBS_BASE}/${id}`,
  UPLOAD_JOB_IMAGE: (jobId: string) => `${JOBS_BASE}/upload-hinh-cong-viec/${jobId}`,
  GET_JOB_CATEGORY_MENU: `${JOBS_BASE}/lay-menu-loai-cong-viec`,
  GET_JOB_CATEGORY_DETAILS: (categoryId: string) => `${JOBS_BASE}/lay-chi-tiet-loai-cong-viec/${categoryId}`,
  GET_JOB_BY_CATEGORY_DETAIL: (categoryDetailId: string) => `${JOBS_BASE}/lay-cong-viec-theo-chi-tiet-loai/${categoryDetailId}`,
  GET_JOB_DETAIL: (jobId: string) => `${JOBS_BASE}/lay-cong-viec-chi-tiet/${jobId}`,
  GET_BY_NAME: (jobName: string) => `${JOBS_BASE}/lay-danh-sach-cong-viec-theo-ten/${jobName}`,
};

/**
* Jobs Categories API endpoints
*/
export const JobCategoriesApi = {
  GET_ALL: JOB_CATEGORIES_BASE,
  CREATE: JOB_CATEGORIES_BASE,
  GET_PAGINATED_SEARCH: (pageIndex?:number, pageSize?:number) => `${JOB_CATEGORIES_BASE}/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}`,
  GET_BY_ID: (id: string) => `${JOB_CATEGORIES_BASE}/${id}`,
  UPDATE: (id: string) => `${JOB_CATEGORIES_BASE}/${id}`,
  DELETE: (id: string) => `${JOB_CATEGORIES_BASE}/${id}`,
};

/**
* Users API endpoints
*/
export const UsersApi = {
  GET_ALL: USERS_BASE,
  CREATE: USERS_BASE,
  DELETE_BY_ID: (id: string) => `${USERS_BASE}?id=${id}`,
  GET_PAGINATED_SEARCH: (pageIndex?:number, pageSize?:number) => `${USERS_BASE}/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}`,
  GET_BY_ID: (id: string) => `${USERS_BASE}/${id}`,
  UPDATE: (id: string) => `${USERS_BASE}/${id}`,
  GET_BY_NAME: (username: string) => `${USERS_BASE}/search/${username}`,
  UPLOAD_AVATAR: `${USERS_BASE}/upload-avatar`,
};


/**
* Skills API endpoints
*/
export const SkillsApi = {
  GET_ALL: SKILLS_BASE,
};

/**
* Job Hires API endpoints
*/
export const JobHireApi = {
  GET_ALL: JOB_HIRE_BASE,
  CREATE: JOB_HIRE_BASE,
  GET_PAGINATED_SEARCH: (pageIndex?:number, pageSize?:number) => `${JOB_HIRE_BASE}/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}`,
  GET_BY_ID: (id: string) => `${JOB_HIRE_BASE}/${id}`,
  UPDATE: (id: string) => `${JOB_HIRE_BASE}/${id}`,
  DELETE: (id: string) => `${JOB_HIRE_BASE}/${id}`,
  GET_HIRED_LIST: `${JOB_HIRE_BASE}/lay-danh-sach-da-thue`,
  COMPLETE_JOB: (jobHireId: string) => `${JOB_HIRE_BASE}/hoan-thanh-cong-viec/${jobHireId}`,
};
