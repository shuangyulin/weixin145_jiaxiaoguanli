const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"科目二学习","menuJump":"列表","tableName":"kemuerxuexi"}],"menu":"科目二学习管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"科目类型","menuJump":"列表","tableName":"kemuleixing"}],"menu":"科目类型管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"科目三学习","menuJump":"列表","tableName":"kemusanxuexi"}],"menu":"科目三学习管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"试卷管理","tableName":"exampaper"}],"menu":"试卷管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"试题管理","tableName":"examquestion"}],"menu":"试题管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"公告","tableName":"news"}],"menu":"系统管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"试卷列表","tableName":"exampaperlist"},{"buttons":["新增","查看","修改","删除"],"menu":"考试记录","tableName":"examrecord"},{"buttons":["新增","查看","修改","删除"],"menu":"错题本","tableName":"examfailrecord"}],"menu":"考试管理"}],"frontMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"科目二学习列表","menuJump":"列表","tableName":"kemuerxuexi"}],"menu":"科目二学习模块"},{"child":[{"buttons":["查看评论","查看"],"menu":"科目三学习列表","menuJump":"列表","tableName":"kemusanxuexi"}],"menu":"科目三学习模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看"],"menu":"考试记录","tableName":"examrecord"},{"buttons":["查看"],"menu":"错题本","tableName":"examfailrecord"},{"buttons":["查看"],"menu":"试卷列表","tableName":"exampaperlist"}],"menu":"考试管理"}],"frontMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"科目二学习列表","menuJump":"列表","tableName":"kemuerxuexi"}],"menu":"科目二学习模块"},{"child":[{"buttons":["查看评论","查看"],"menu":"科目三学习列表","menuJump":"列表","tableName":"kemusanxuexi"}],"menu":"科目三学习模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;
