/* eslint-disable camelcase */
/**
 * Created by Tianbin on 2017/7/15.
 */
import Axios from 'axios'

export default {
  getLastRankList (studentId, classId, access_token) {
    return Axios.get('/teach/student/yesterdayRankingList', {params: {studentId, classId, access_token}})
  },
  getThisRankList (studentId, classId, access_token) {
    return Axios.get('/teach/student/thisWeekRankingList', {params: {studentId, classId, access_token}})
  },
  getWordRankList (studentId, classId, access_token) {
    return Axios.get('/teach/student/vocabularyMasterList', {params: {studentId, classId, access_token}})
  },
  getPersonInfo (studentId, access_token) {
    return Axios.get('/teach/student/baseStudentStatistic', {params: {studentId, access_token}})
  }
}
