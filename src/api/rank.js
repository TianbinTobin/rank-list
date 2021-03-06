/* eslint-disable camelcase */
/**
 * Created by Tianbin on 2017/7/15.
 */
import Axios from 'axios'

export default {
  /**
   * 昨日排行榜
   * @param studentId 学生id
   * @param classId   班级id
   * @param access_token token
   * @returns {AxiosPromise}
   */
  getLastRankList (studentId, classId, access_token) {
    return Axios.get('/teach/student/yesterdayRankingList', {params: {studentId, classId, access_token}})
  },
  /**
   * 本周排行榜
   * @param studentId
   * @param classId
   * @param access_token
   * @returns {AxiosPromise}
   */
  getThisRankList (studentId, classId, access_token) {
    return Axios.get('/teach/student/thisWeekRankingList', {params: {studentId, classId, access_token}})
  },
  /**
   * 词汇量排行榜
   * @param studentId
   * @param classId
   * @param access_token
   * @returns {AxiosPromise}
   */
  getWordRankList (studentId, classId, access_token) {
    return Axios.get('/teach/student/vocabularyMasterList', {params: {studentId, classId, access_token}})
  },
  /**
   * 个人成绩单
   * @param studentId
   * @param access_token
   * @returns {AxiosPromise}
   */
  getPersonInfo (studentId, access_token) {
    return Axios.get('/teach/student/baseStudentStatistic', {params: {studentId, access_token}})
  },
  /**
   * pk实时对战结果
   * @param studentId
   * @param friendId
   * @param challengeTime
   * @param access_token
   * @returns {AxiosPromise}
   */
  getPKResult (studentId, friendId, challengeTime, access_token) {
    let type = 1
    return Axios.get('/socket/userStudentPk/realTimeResult', {params: {studentId, friendId, challengeTime, type, access_token}})
  },
  /**
   * 刷新token
   * @param accountId
   * @param userTypeId
   * @param refreshToken
   * @returns {AxiosPromise}
   */
  getRefreshToken (accountId, userTypeId, refreshToken) {
    return Axios.get('/login/refresh/token', {params: {accountId, userTypeId, refreshToken}})
  }
}
