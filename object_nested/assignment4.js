const profile = {
    name: "Asha Verma",
    course: "BCA AIML",
    city: "Pilibhit",
    skills: ["HTML", "CSS", "JavaScript"]
};

// Display object keys
console.log("Profile Properties:");
console.log(Object.keys(profile));

// Display object values
console.log("Profile Values:");
console.log(Object.values(profile));

// Display key-value pairs
console.log("Profile Entries:");
console.log(Object.entries(profile));

// Generate profile summary
const summary =
    `${profile.name} studies ${profile.course} and lives in ${profile.city}.`;

console.log("Profile Summary:");
console.log(summary);

// Display skills
console.log("Skills:", profile.skills.join(", "));