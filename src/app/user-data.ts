export var registrationData = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    contact: null,
    country: "",
    highSchoolBoard: "",
    highSchoolSchool: "",
    highSchoolPercentage: null,
    intermediateBoard: "",
    intermediateSchool: "",
    intermediatePercentage: null,
    universityName: "",
    graduationCourse: "",
    graduationBranch: "",
    graduationPercentage: null,
    agreement: false,
}
interface cartItemsInterface {
    id: string,
    title: string,
    price: number,
    count: number,
    totalCost: number,
    imgUrl: string,
}
export var cartItems: cartItemsInterface[] = [
]
interface cartDetailsInterface {
    totalItems: number,
    totalCost: number,
}
export var cartDetails: cartDetailsInterface = {
    totalItems: 0,
    totalCost: 0,
}