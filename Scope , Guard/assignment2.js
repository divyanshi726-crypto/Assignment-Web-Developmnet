function validateUser(user) {
    if (!user || typeof user !== "object") {
        return {
            valid: false,
            error: "User is required"
        };
    }

    if (typeof user.name !== "string" || !user.name.trim()) {
        return {
            valid: false,
            error: "Name is required"
        };
    }

    if (
        typeof user.email !== "string" ||
        !/^\S+@\S+\.\S+$/.test(user.email)
    ) {
        return {
            valid: false,
            error: "Valid email is required"
        };
    }

    return {
        valid: true,
        error: null
    };
}

// Test the function
console.log(
    validateUser({
        name: "Riya",
        email: "riya@example.com"
    })
);

console.log(
    validateUser({
        name: "",
        email: "wrong-email"
    })
);