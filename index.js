function signup(userName) {
    const users = ["john_doe", "jane_doe", "user123"];
    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

function login(userName, password) {
    const users = ["john_doe", "jane_doe", "user123"];
    const correctPassword = "Emp@123";
    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } else if (password !== correctPassword) {
        return "Wrong Password...";
    } else {
        return "Login Successful...";
    }
}

// Test cases
console.log(signup("john_doe")); // User Already Registered, Please Login
console.log(signup("new_user")); // Signup Successful, Please Login
console.log(login("john_doe", "Emp@123")); // Login Successful...
console.log(login("unknown_user", "Emp@123")); // User Not Found, Please Signup
console.log(login("john_doe", "wrong_pass")); // Wrong Password...
