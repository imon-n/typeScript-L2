// union 

type userRole = 'admin' | 'user' | 'guest'

const getDashboard = (role: userRole) =>{
    if(role === "admin"){
        return "admin dashboard"
    }
    else if (role === "user"){
        return "User dashboard"
    }
    else{
        return "guest dashboard"
    }
}

// getDashboard("usjer")

// intersection
 type Employee = {
    id: string,
    name: string,
    phoneNo: string
 }

 type Manager = {
    designation: string,
    teamSize: number
 }

 type EmployeeManager = Employee & Manager

 const Chowdoury: EmployeeManager = {
    id: "123",
    name: "imon",
    phoneNo:"0186354321",
    designation:"manager",
    teamSize: 20
 }