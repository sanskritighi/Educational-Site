const API_URLS = {
    notifications:'notifications',
    notificationSummary:'notification-summary/',
    notificationMarkAll:'notifications-markall/',
    listTeachers:'all-teachers',
    viewBlogs: 'view_blogs',
    createBlogs: 'create_blogs',
    deleteBlogs:'delete_blogs',
    viewResources: 'view_resources',
    updateResources: 'update_resources',
    deleteResources: 'delete_resources',
    searchBlogs: 'search_blogs',
    searchCategorys: 'search_categorys',
    createCategorys: 'create_categorys',
    viewCategorys: 'view_categorys',
    updateCategorys: 'update_categorys',
    deleteCategorys: 'delete_categorys',
    createSubjects: 'category_subjects',
    viewSubjects: 'view_subjects',
    updateSubjects: 'update_subjects',
    deleteSubjects: 'delete_subjects',
    createTopics: 'create_topics',
    viewTopics: 'view_topics',
    updateTopics: 'update_topics',
    deleteTopics: 'delete_topics',
    assignedTopics:'assigned_topics',
    topicContents:'topic_contents',
    createSubtopics: 'create_subtopics',
    viewSubtopics: 'view_subtopics',
    updateSubtopics: 'update_subtopics',
    deleteSubtopics: 'delete_subtopics',
    createSyllabus: 'create_syllabus',
    viewSyllabus: 'view_syllabus',
    updateSyllabus: 'update_syllabus',
    deleteSyllabus: 'delete_syllabus',
    viewFiles: 'view_files',
    createFiles: 'create_files',
    updateFiles: 'update_files',
    deleteFiles: 'delete_files',
    register: 'register',
    userLogin: 'login',
    userProfile: 'profile',
    changePassword: 'changepassword',
    sendResetPasswordEmail: 'send_reset_password_email',
    userPasswordReset: 'user_password_reset',
    swagger: 'swagger',
    contact:'contact',
    comments:'comments',
    media: '^media/(?P<path>.*)$',

  };

  const _API_URLS = {
    viewBlogs: 'view_blogs',
    createBlogs: 'create_blogs/',
    viewResources: 'view_resources/',
    updateResources: 'update_resources/',
    deleteResources: 'delete_resources/',
    searchBlogs: 'search_blogs/',
    searchCategorys: 'search_categorys/',
    createCategorys: 'category_creates/',
    viewCategorys: 'category_view/',
    updateCategorys: 'category_update/<int:pk>/',
    deleteCategorys: 'category_delete/<int:pk>/',
    createSubjects: 'subject_create/',
    viewSubjects: 'subject_view/',
    updateSubjects: 'subject_update/<int:pk>/',
    deleteSubjects: 'subject_delete/<int:pk>/',
    createTopics: 'topic_create/',
    viewTopics: 'topic_view/',
    updateTopics: 'topic_update/<int:pk>/',
    deleteTopics: 'topic_delete/<int:pk>/',
    createSubtopics: 'subtopic_create/',
    viewSubtopics: 'subtopic_view/',
    updateSubtopics: 'subtopic_update/<int:pk>/',
    deleteSubtopics: 'subtopic_delete/<int:pk>/',
    createSyllabus: 'syllabus_create/',
    viewSyllabus: 'syllabus_view/',
    updateSyllabus: 'syllabus_update/<int:pk>/',
    deleteSyllabus: 'syllabus_delete/<int:pk>/',
    viewFiles: 'view_files/',
    createFiles: 'create_files/',
    updateFiles: 'update_files/',
    deleteFiles: 'delete_files/',
    register: 'register/',
    userLogin: 'login/',
    userProfile: 'profile/',
    changePassword: 'changepassword/',
    sendResetPasswordEmail: 'send_reset_password_email/',
    userPasswordReset: 'user_password_reset/',
    swagger: 'swagger/',
    media: '^media/(?P<path>.*)$',
};

  
export default API_URLS;