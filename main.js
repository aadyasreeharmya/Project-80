var name_of_the_student_array = [];

function submit() {
    var name_one = document.getElementById("name_of_the_student_1").value;
    var name_two = document.getElementById("name_of_the_student_2").value;
    var name_three = document.getElementById("name_of_the_student_3").value;
    var name_four = document.getElementById("name_of_the_student_4").value;
    name_of_the_student_array.push(name_one);
    name_of_the_student_array.push(name_two);
    name_of_the_student_array.push(name_three);
    name_of_the_student_array.push(name_four);
    console.log (name_of_the_student_array);
    document.getElementById("display_name").innerHTML= name_of_the_student_array;
    
    document.getElementById("submit_button").style.display= "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting() {
    name_of_the_student_array.sort();
    console.log (name_of_the_student_array);
    document.getElementById("display_name").innerHTML= name_of_the_student_array;
}