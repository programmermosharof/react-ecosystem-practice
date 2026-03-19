import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Marks = ({marksPromise}) => {
    const marksDataRes =use(marksPromise)
    const marksData = marksDataRes.data;
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.student_id,
            name: studentData.name,
            math:studentData.marks.math,
            bangla: studentData.marks.bangla,
            english: studentData.marks.english
        } 
        const avg = (student.math + student.bangla + student.english) /3;
        student.avg=avg.toFixed(2);
        return student
    })
    console.log(marksChartData);
    
    
    return (
        <div className='w-11/12 mx-auto'>
            <BarChart width={1700} height={500}  data={marksChartData}>
            <XAxis dataKey={"name"} fill='#0000cc'></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey={"avg"} fill="#8884d8" ></Bar>
            <Bar dataKey={"math"} fill='green'></Bar>
            <Bar dataKey={"bangla"} fill='blue'></Bar>
            <Bar dataKey={"english"} fill='purple'></Bar>
            </BarChart>
        </div>
    );
};

export default Marks;