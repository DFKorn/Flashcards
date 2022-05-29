import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";


export const addQuizTopic = (quiz) => {
    const { topicId, id } = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizId({topicId: topicId, quizId: id}))
    }
}
    



export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {quizzes:{}},
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        },
    },
})



export const selectQuizzes = (state) => state.quizzes.quizzes;

export const {addQuiz} = quizzesSlice.actions;

export default quizzesSlice.reducer;