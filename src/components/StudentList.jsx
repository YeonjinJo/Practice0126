// TODO: StudentList 컴포넌트를 작성하세요. props로 학생 목록을 받아와서 표시해야 합니다.
function StudentList(props) {
  return (
    <>
      {props.filteredStudents.map((element) => {
        return (
          <ul>
            <li>이름 : {element.name}</li>
            <li>나이 : {element.age}</li>
            <li>성적 : {element.grade}</li>
          </ul>
        );
      })}
    </>
  );
}

export default StudentList;
