students =[ {
 name:"Abc",
  grade:"10th",
  maths:100,
  science:80,
  english:95
},
{
 name:"Xyz",
  grade:"10th",
  maths:90,
  science:100,
  english:85
},          
{
 name:"pqr",
  grade:"10th",
  maths:100,
  science:70,
  english:98
}, ]

for(let i=0;i<3;i++)
{
  console.log("Student No: "+(i+1)+" result\n")
  console.log("Name:: "+students[i].name+" grade:: "+students[i].grade+" maths:: "+students[i].maths+" science:: "+students[i].science+" English:: "+students[i].english+"\n")
}