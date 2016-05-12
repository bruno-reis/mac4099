/// <reference path="../typings/tsd.d.ts" />

class SubjectService {
  subjectList
  subjects
  
  constructor() {
    this.subjects = [{}, {
      name: 'Análise',
      id: 1,
      classes: [{
        day: 'Terça',
        time: '0800:0940',
        room: 'B4'
      }, {
        day: 'Sexta',
        time: '1000:1140',
        room: 'B4'
      }],
      exams: [{
        title: 'P1',
        date: '29/Março',
        weight: '1'
      }],
      homeworks: [{
        title: 'Lista 1',
        date: '15/Março',
        weight: '1'
      }]
    }, {
      name: 'Concorrentes',
      id: 2,
      classes: [{
        day: 'Segunda',
        time: '0800:0940',
        room: 'B2'
      }, {
        day: 'Quarta',
        time: '1000:1140',
        room: 'B2'
      }],
      exams: [{
        title: 'P1',
        date: '24/Março',
        weight: '1'
      }, {
        title: 'P2',
        date: '22/Maio',
        weight: '2'
      }],
      homeworks: [{
        title: 'Lista 2',
        date: '10/Maio',
        weight: '1'
      }]
    }]
    this.subjectList = [{
      name: 'Análise',
      id: 1
    }, {
      name: 'Concorrentes',
      id: 2
    }]
  }

  getSubject(subjectId) {
    return this.subjects[subjectId]
  }

  getSubjects() {
    return this.subjectList
  }

  addSubject(subject) {
    subject.id = ''
    subject.id  = this.subjects[this.subjects.length - 1].id + 1
    this.subjectList.push(subject)
    subject.classes = []
    subject.exams = []
    subject.homeworks = []
    this.subjects.push(subject)
  }
  
  addClass(subjectId, input) {
    this.subjects[subjectId].classes.push(input)
  }

  addExam(subjectId, input) {
    this.subjects[subjectId].exams.push(input)
  }

  addHomework(subjectId, input) {
    this.subjects[subjectId].homeworks.push(input)
  }
}

angular.module('app.services', [])

  .factory('BlankFactory', [function(){

  }])

  .service('SubjectService', SubjectService)

  .service('Events',function($rootScope){
    var events=[]

    return {
      loadEvents:function(){
        events=[{
          title:'medicine',
          start:'2016-05-20'
        },{
          title:'examination',
          start:'2016-05-08'
        },{
          title:'cost',
          start:'2016-05-16'
        },{
          title:'examination',
          start:'2016-05-17'
        }]

        $rootScope.$broadcast('events_get')
      },

      getAllEvents:function(){
        return events
      },

      getEventsByDate:function(date){
        return events.filter(function(e){
          return e.start===date
        })
      }
    }
  })

