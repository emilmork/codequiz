const reducer = function(state = [], action) {
    if (action.type == 'SUBMIT_ANSWER') {
        console.log('submitting');
        state.filter(task => action.taskId == task.id)
            .forEach(task => task.answeredBy.push({
                username: action.username,
                answer: action.asnwer
            }));
    }
    return state;
}
