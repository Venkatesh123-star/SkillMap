

let careers = {
    java: {
        title: "Full Stack Java Developer",
        icon: "☕",
        description: "Build complete web applications using Java.",
        stages: [
            { title: "Stage 1 - Frontend Fundamentals", skills: ["HTML", "CSS", "JavaScript"] },
            { title: "Stage 2 - Java Fundamentals", skills: ["Core Java", "OOP", "Collections", "Exception Handling"] },
            { title: "Stage 3 - Database", skills: ["SQL", "MySQL", "JDBC"] },
            { title: "Stage 4 - Backend Development", skills: ["Servlets", "Spring", "Spring Boot", "REST API", "Hibernate"] },
            { title: "Stage 5 - Frontend Framework", skills: ["React"] },
            { title: "Stage 6 - Development Tools", skills: ["Git", "GitHub", "Maven", "Postman"] }
        ]
    },

    frontend: {
        title: "Frontend Developer",
        icon: "🎨",
        description: "Create responsive and interactive websites.",
        stages: [
            { title: "Stage 1 - Web Fundamentals", skills: ["HTML", "CSS", "Responsive Design"] },
            { title: "Stage 2 - JavaScript", skills: ["JavaScript", "DOM", "ES6", "Async JavaScript"] },
            { title: "Stage 3 - Frontend Framework", skills: ["React", "React Hooks", "Routing"] },
            { title: "Stage 4 - API Integration", skills: ["REST API", "Fetch API", "JSON"] },
            { title: "Stage 5 - Tools", skills: ["Git", "GitHub", "Deployment"] }
        ]
    },

    backend: {
        title: "Backend Developer",
        icon: "⚙️",
        description: "Build server-side logic and APIs.",
        stages: [
            { title: "Stage 1 - Programming", skills: ["Core Java", "OOP", "Collections", "Exception Handling"] },
            { title: "Stage 2 - Databases", skills: ["SQL", "MySQL", "Database Design"] },
            { title: "Stage 3 - Backend Framework", skills: ["Spring", "Spring Boot", "REST API"] },
            { title: "Stage 4 - Data Access", skills: ["JDBC", "Hibernate", "JPA"] },
            { title: "Stage 5 - Tools", skills: ["Git", "GitHub", "Maven", "Postman", "Deployment"] }
        ]
    },

    android: {
        title: "Android Developer",
        icon: "📱",
        description: "Create mobile applications for Android.",
        stages: [
            { title: "Stage 1 - Programming", skills: ["Kotlin", "Core Java", "OOP"] },
            { title: "Stage 2 - Android Fundamentals", skills: ["Android Studio", "Activities", "Intents", "XML Layouts"] },
            { title: "Stage 3 - App Architecture", skills: ["ViewModel", "MVVM", "Navigation"] },
            { title: "Stage 4 - Data and APIs", skills: ["Room Database", "Firebase", "REST API", "Retrofit"] },
            { title: "Stage 5 - Tools", skills: ["Git", "GitHub", "App Deployment"] }
        ]
    },

    ai: {
        title: "AI / ML Engineer",
        icon: "🤖",
        description: "Work with data, machine learning, and AI.",
        stages: [
            { title: "Stage 1 - Programming", skills: ["Python", "Functions", "OOP"] },
            { title: "Stage 2 - Mathematics", skills: ["Statistics", "Probability", "Linear Algebra"] },
            { title: "Stage 3 - Data Analysis", skills: ["NumPy", "Pandas", "Data Visualization"] },
            { title: "Stage 4 - Machine Learning", skills: ["Scikit-learn", "Supervised Learning", "Unsupervised Learning"] },
            { title: "Stage 5 - Advanced AI", skills: ["Deep Learning", "Neural Networks", "Generative AI"] },
            { title: "Stage 6 - Tools", skills: ["Git", "GitHub", "Model Deployment"] }
        ]
    }
};


let skillDetails = {
    "HTML": {
        description: "Learn to structure web pages using elements, headings, forms, links, and semantic tags.",
        duration: "3-5 days",
        prerequisite: "None",
        advice: "Build a personal profile webpage."
    },
    "CSS": {
        description: "Learn styling, colors, layouts, Flexbox, Grid, and responsive design.",
        duration: "1-2 weeks",
        prerequisite: "HTML",
        advice: "Create a responsive landing page."
    },
    "JavaScript": {
        description: "Learn variables, functions, arrays, objects, DOM manipulation, and asynchronous JavaScript.",
        duration: "3-5 weeks",
        prerequisite: "HTML and basic CSS",
        advice: "Build an interactive to-do list."
    },
    "Core Java": {
        description: "Learn Java syntax, variables, loops, arrays, methods, and object-oriented programming.",
        duration: "2-3 weeks",
        prerequisite: "Basic programming knowledge",
        advice: "Build a simple student management application."
    },
    "OOP": {
        description: "Understand classes, objects, inheritance, polymorphism, abstraction, and encapsulation.",
        duration: "1-2 weeks",
        prerequisite: "Basic programming",
        advice: "Model a real-world system using classes."
    },
    "SQL": {
        description: "Learn to retrieve, insert, update, and delete data using SQL queries.",
        duration: "1-2 weeks",
        prerequisite: "Basic database concepts",
        advice: "Design a database for a library."
    },
    "MySQL": {
        description: "Practise relational database design, tables, joins, constraints, and queries.",
        duration: "1-2 weeks",
        prerequisite: "SQL basics",
        advice: "Build a database for a student portal."
    },
    "Spring Boot": {
        description: "Build Java backend applications and REST APIs using Spring Boot.",
        duration: "3-5 weeks",
        prerequisite: "Core Java and OOP",
        advice: "Create a CRUD REST API."
    },
    "React": {
        description: "Build reusable user interfaces using components, props, state, and hooks.",
        duration: "3-5 weeks",
        prerequisite: "HTML, CSS, and JavaScript",
        advice: "Build a dashboard with reusable components."
    },
    "Git": {
        description: "Track code changes and learn commits, branches, merging, and collaboration.",
        duration: "3-5 days",
        prerequisite: "Basic command-line usage",
        advice: "Track one of your projects with Git."
    },
    "GitHub": {
        description: "Host repositories and collaborate through remote branches and pull requests.",
        duration: "2-4 days",
        prerequisite: "Basic Git",
        advice: "Publish a project with a clear README."
    }
};

// Get HTML elements
let homePage = document.getElementById("homePage");
let assessmentPage = document.getElementById("assessmentPage");
let roadmapPage = document.getElementById("roadmapPage");

let careerCards = document.getElementById("careerCards");
let selectedCareer = document.getElementById("selectedCareer");
let skillCheckboxes = document.getElementById("skillCheckboxes");
let studentName = document.getElementById("studentName");
let experienceLevel = document.getElementById("experienceLevel");
let selectedCount = document.getElementById("selectedCount");
let formError = document.getElementById("formError");

let currentCareer = "java";
let knownSkills = [];
let skillStatuses = {};

let storageKey = "skillMapProgress";
// Show selected page
function showPage(page) {
    homePage.classList.remove("active");
    assessmentPage.classList.remove("active");
    roadmapPage.classList.remove("active");

    page.classList.add("active");

    window.scrollTo(0, 0);
}

// Get all skills of a career
function getCareerSkills(careerKey) {
    let skills = [];
    let stages = careers[careerKey].stages;

    for (let i = 0; i < stages.length; i++) {
        for (let j = 0; j < stages[i].skills.length; j++) {
            let skill = stages[i].skills[j];

            if (!skills.includes(skill)) {
                skills.push(skill);
            }
        }
    }

    return skills;
}

// Create career cards
function renderCareerCards() {
    careerCards.innerHTML = "";

    for (let key in careers) {
        let career = careers[key];

        let card = document.createElement("div");
        card.className = "career-card";

        let icon = document.createElement("div");
        icon.className = "career-icon";
        icon.innerText = career.icon;

        let title = document.createElement("h3");
        title.innerText = career.title;

        let description = document.createElement("p");
        description.innerText = career.description;

        let action = document.createElement("span");
        action.className = "card-action";
        action.innerText = "Build roadmap →";

        card.append(icon, title, description, action);

        card.addEventListener("click", function() {
            currentCareer = key;
            selectedCareer.value = key;
            renderSkillCheckboxes();
            showPage(assessmentPage);
        });

        careerCards.appendChild(card);
    }
}

// Create career dropdown
function renderCareerDropdown() {
    selectedCareer.innerHTML = "";

    for (let key in careers) {
        let option = document.createElement("option");

        option.value = key;
        option.innerText = careers[key].title;

        selectedCareer.appendChild(option);
    }

    selectedCareer.value = currentCareer;
}

// Create skill checkboxes
function renderSkillCheckboxes() {
    skillCheckboxes.innerHTML = "";

    let skills = getCareerSkills(currentCareer);

    for (let i = 0; i < skills.length; i++) {
        let skill = skills[i];

        let label = document.createElement("label");
        label.className = "skill-option";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = skill;

        if (knownSkills.includes(skill)) {
            checkbox.checked = true;
        }

        let text = document.createElement("span");
        text.innerText = skill;

        checkbox.addEventListener("change", updateSelectedCount);

        label.append(checkbox, text);
        skillCheckboxes.appendChild(label);
    }

    updateSelectedCount();
}

// Count selected skills
function updateSelectedCount() {
    let checkboxes = skillCheckboxes.querySelectorAll(
        'input[type="checkbox"]'
    );

    let count = 0;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            count++;
        }
    }

    selectedCount.innerText = count + " selected";
}

// Get skills selected by the user
function getSelectedSkills() {
    let checkboxes = skillCheckboxes.querySelectorAll(
        'input[type="checkbox"]'
    );

    let skills = [];

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            skills.push(checkboxes[i].value);
        }
    }

    return skills;
}

// Generate roadmap

function generateRoadmap() {
    if (!validateAssessment()) {
    return;
}
    let name = studentName.value.trim();

    if (name === "") {
        formError.innerText = "Please enter your name.";
        studentName.focus();
        return;
    }

    formError.innerText = "";

    currentCareer = selectedCareer.value;

    // Get skills selected by the student
    knownSkills = getSelectedSkills();

    // Reset and initialize skill statuses
    skillStatuses = {};

    let allSkills = getCareerSkills(currentCareer);

    for (let i = 0; i < allSkills.length; i++) {
        let skill = allSkills[i];

        if (knownSkills.includes(skill)) {
            skillStatuses[skill] = "completed";
        } else {
            skillStatuses[skill] = "not-started";
        }
    }

    // Update roadmap heading
    document.getElementById("roadmapTitle").innerText =
        careers[currentCareer].title + " Roadmap";

    document.getElementById("roadmapSubtitle").innerText =
        "Welcome, " + name + "! Track your learning progress below.";

    // Display roadmap skills
    renderRoadmap(careers[currentCareer]);

    // Display progress information
    updateRoadmapStats(currentCareer);

    // Open roadmap page
    showPage(roadmapPage);
}


function updateRoadmapStats(careerKey) {
    let allSkills = getCareerSkills(careerKey);

    let total = allSkills.length;
    let completed = 0;
    let inProgress = 0;
    let notStarted = 0;

    for (let i = 0; i < allSkills.length; i++) {
        let skill = allSkills[i];

        if (skillStatuses[skill] === "completed") {
            completed++;
        } else if (skillStatuses[skill] === "in-progress") {
            inProgress++;
        } else {
            notStarted++;
        }
    }

    let remaining = total - completed;
    let progress = 0;
    let skillGap = 0;

    if (total > 0) {
        progress = Math.round((completed / total) * 100);
        skillGap = Math.round((remaining / total) * 100);
    }

    document.getElementById("totalSkills").innerText = total;
    document.getElementById("knownSkills").innerText = completed;
    document.getElementById("remainingSkills").innerText = remaining;

    document.getElementById("progressText").innerText =
        progress + "%";

    document.getElementById("progressBar").style.width =
        progress + "%";

    document.getElementById("progressDetails").innerText =
        completed + " of " + total + " skills completed | " +
        inProgress + " in progress";

    document.getElementById("skillGapText").innerText =
        "Skill gap: " + skillGap + "% (" + remaining +
        " skills remaining)";
        updateRecommendation(careerKey);
        renderSkillExplorer();
        saveProgress();
        generateLearningPlan();
}

// Display roadmap

function renderRoadmap(career) {
    let roadmapContainer = document.getElementById("roadmapContainer");

    roadmapContainer.innerHTML = "";

    for (let i = 0; i < career.stages.length; i++) {
        let stage = career.stages[i];

        let stageDiv = document.createElement("div");
        stageDiv.className = "roadmap-stage";

        let stageTitle = document.createElement("h3");
        stageTitle.innerText = stage.title;

        stageDiv.appendChild(stageTitle);

        for (let j = 0; j < stage.skills.length; j++) {
            let skill = stage.skills[j];
            let status = skillStatuses[skill] || "not-started";

            let skillCard = document.createElement("div");
            skillCard.className = "roadmap-skill";

            let marker = document.createElement("span");
            marker.className = "skill-marker";

            let skillName = document.createElement("h4");
            skillName.innerText = skill;

            let statusText = document.createElement("p");
            statusText.className = "skill-status";

            // Create status dropdown
            let statusSelect = document.createElement("select");
            statusSelect.className = "skill-status-select";

            let notStartedOption = document.createElement("option");
            notStartedOption.value = "not-started";
            notStartedOption.innerText = "Not Started";

            let inProgressOption = document.createElement("option");
            inProgressOption.value = "in-progress";
            inProgressOption.innerText = "In Progress";

            let completedOption = document.createElement("option");
            completedOption.value = "completed";
            completedOption.innerText = "Completed";

            statusSelect.appendChild(notStartedOption);
            statusSelect.appendChild(inProgressOption);
            statusSelect.appendChild(completedOption);

            // Set the current status
            statusSelect.value = status;

            // Update status when the dropdown changes
            statusSelect.addEventListener("change", function() {
                skillStatuses[skill] = statusSelect.value;

                updateSkillCard(
                    skillCard,
                    marker,
                    statusText,
                    statusSelect.value
                );

                updateRoadmapStats(currentCareer);
            });

            skillCard.appendChild(marker);
            skillCard.appendChild(skillName);
            skillCard.appendChild(statusText);
            skillCard.appendChild(statusSelect);

            // Display the correct status
            updateSkillCard(
                skillCard,
                marker,
                statusText,
                status
            );

            stageDiv.appendChild(skillCard);
        }

        roadmapContainer.appendChild(stageDiv);
    }
}


function updateSkillCard(card, marker, statusText, status) {
    card.className = "roadmap-skill";

    if (status === "completed") {
        card.classList.add("known");
        marker.innerText = "✓";
        statusText.innerText = "Completed";
    } else if (status === "in-progress") {
        card.classList.add("in-progress");
        marker.innerText = "◐";
        statusText.innerText = "In Progress";
    } else {
        marker.innerText = "○";
        statusText.innerText = "Not Started";
    }
}


function updateRecommendation(careerKey) {
    let career = careers[careerKey];

    let recommendedSkill = "";
    let recommendedStage = "";
    let recommendedStageIndex = -1;

    // Find the first skill that is not completed
    for (let i = 0; i < career.stages.length; i++) {
        let stage = career.stages[i];

        for (let j = 0; j < stage.skills.length; j++) {
            let skill = stage.skills[j];

            if (skillStatuses[skill] !== "completed") {
                recommendedSkill = skill;
                recommendedStage = stage.title;
                recommendedStageIndex = i;
                break;
            }
        }

        if (recommendedSkill !== "") {
            break;
        }
    }

    let skillElement =
        document.getElementById("recommendationSkill");

    let stageElement =
        document.getElementById("recommendationStage");

    let priorityElement =
        document.getElementById("recommendationPriority");

    let reasonElement =
        document.getElementById("recommendationReason");

    let prerequisiteElement =
        document.getElementById("recommendationPrerequisite");

    // If every skill is completed
    if (recommendedSkill === "") {
        skillElement.innerText = "All Skills Completed!";

        stageElement.innerText =
            "You have completed your current career roadmap.";

        priorityElement.innerText = "Completed";
        priorityElement.className = "";

        reasonElement.innerText =
            "Excellent work! You can now build projects, practise interviews, and explore advanced topics.";

        prerequisiteElement.innerText =
            "Next step: apply your skills in a real-world project.";

        return;
    }

    // Display the recommended skill and stage
    skillElement.innerText = recommendedSkill;
    stageElement.innerText = recommendedStage;

    // Set priority according to the roadmap stage
    let priority = "";

    if (recommendedStageIndex <= 1) {
        priority = "High";
    } else if (recommendedStageIndex <= 3) {
        priority = "Medium";
    } else {
        priority = "Low";
    }

    priorityElement.innerText = priority;
    priorityElement.className = priority.toLowerCase();

    // Explain the recommendation
    reasonElement.innerText =
        recommendedSkill +
        " is the next unfinished skill in your " +
        career.title +
        " roadmap. Learning it will help you progress through " +
        recommendedStage + ".";

    prerequisiteElement.innerText =
        "Learning order: finish this skill before moving on to later skills in your roadmap.";
}


function getSkillInformation(skill, career) {
    if (skillDetails[skill]) {
        return skillDetails[skill];
    }

    let stageTitle = "";
    let stageIndex = -1;

    for (let i = 0; i < career.stages.length; i++) {
        for (let j = 0; j < career.stages[i].skills.length; j++) {
            if (career.stages[i].skills[j] === skill) {
                stageTitle = career.stages[i].title;
                stageIndex = i;
                break;
            }
        }

        if (stageIndex !== -1) {
            break;
        }
    }

    let prerequisite = "Review the previous roadmap skills.";

    if (stageIndex === 0) {
        prerequisite = "No earlier stage in this roadmap.";
    } else if (stageIndex > 0) {
        prerequisite = career.stages[stageIndex - 1].skills.join(", ");
    }

    return {
        description: skill + " is part of your " +
            career.title + " learning roadmap.",
        duration: "1-2 weeks (estimate)",
        prerequisite: prerequisite,
        advice: "Practise " + skill +
            " with a small project and hands-on exercises."
    };
}

function renderSkillExplorer() {
    let career = careers[currentCareer];
    let allSkills = getCareerSkills(currentCareer);

    let searchText = document.getElementById("skillSearch")
        .value.toLowerCase().trim();

    let filterStatus = document.getElementById("skillFilter").value;

    let results = document.getElementById("explorerResults");
    let count = document.getElementById("explorerCount");

    results.innerHTML = "";

    let matchedCount = 0;

    for (let i = 0; i < allSkills.length; i++) {
        let skill = allSkills[i];
        let status = skillStatuses[skill] || "not-started";

        // Apply the status filter
        if (filterStatus !== "all" && status !== filterStatus) {
            continue;
        }

        // Apply the search filter
        if (skill.toLowerCase().indexOf(searchText) === -1) {
            continue;
        }

        matchedCount++;

        let information = getSkillInformation(skill, career);

        let card = document.createElement("div");
        card.className = "explorer-skill-card";

        let title = document.createElement("h3");
        title.innerText = skill;

        let statusText = document.createElement("p");
        statusText.className = "explorer-status";
        statusText.innerText =
            status === "completed" ? "Completed" :
            status === "in-progress" ? "In Progress" :
            "Not Started";

        let description = document.createElement("p");
        description.innerText = information.description;

        let duration = document.createElement("p");
        duration.innerText = "Estimated time: " + information.duration;

        let detailButton = document.createElement("button");
        detailButton.type = "button";
        detailButton.innerText = "View Details";

        detailButton.addEventListener("click", function() {
            showSkillDetails(skill, career);
        });

        card.appendChild(title);
        card.appendChild(statusText);
        card.appendChild(description);
        card.appendChild(duration);
        card.appendChild(detailButton);

        results.appendChild(card);
    }

    count.innerText = matchedCount + " skill(s) found";

    if (matchedCount === 0) {
        count.innerText = "No skills match your search or filter.";
    }
}

function showSkillDetails(skill, career) {
    let information = getSkillInformation(skill, career);

    document.getElementById("detailSkillName").innerText = skill;

    document.getElementById("detailSkillDescription").innerText =
        "About: " + information.description;

    document.getElementById("detailSkillDuration").innerText =
        "Estimated learning time: " + information.duration;

    document.getElementById("detailSkillPrerequisite").innerText =
        "Prerequisites: " + information.prerequisite;

    document.getElementById("detailSkillAdvice").innerText =
        "Practice advice: " + information.advice;

    document.getElementById("skillDetailModal")
        .classList.add("active");
}




function saveProgress() {
    let message = document.getElementById("storageMessage");

    try {
        let progress = {
            currentCareer: currentCareer,
            knownSkills: knownSkills,
            skillStatuses: skillStatuses
        };

        localStorage.setItem(storageKey, JSON.stringify(progress));

        if (message) {
            message.innerText = "Progress saved successfully!";
        }

        return true;

    } catch (error) {
        if (message) {
            message.innerText =
                "Unable to save progress. Check browser storage settings.";
        }

        return false;
    }
}


function restoreProgress() {
    let message = document.getElementById("storageMessage");

    try {
        let savedData = localStorage.getItem(storageKey);

        if (!savedData) {
            if (message) {
                message.innerText = "No saved progress found.";
            }
            return false;
        }

        let progress = JSON.parse(savedData);

        if (
            progress === null ||
            typeof progress !== "object" ||
            Array.isArray(progress)
        ) {
            throw new Error("Invalid saved data");
        }

        if (!careers[progress.currentCareer]) {
            throw new Error("Invalid career data");
        }

        if (
            !Array.isArray(progress.knownSkills) ||
            progress.skillStatuses === null ||
            typeof progress.skillStatuses !== "object" ||
            Array.isArray(progress.skillStatuses)
        ) {
            throw new Error("Invalid progress data");
        }

        currentCareer = progress.currentCareer;
        knownSkills = progress.knownSkills;
        skillStatuses = progress.skillStatuses;

        renderCareerDropdown();
        renderSkillCheckboxes();

        if (message) {
            message.innerText = "Progress restored successfully!";
        }

        return true;

    } catch (error) {
        if (message) {
            message.innerText =
                "Saved progress is invalid or unavailable. Please reset it and try again.";
        }

        return false;
    }
}



function validateLearningPlanner() {
    let dailyHours = Number(
        document.getElementById("dailyHours").value
    );

    let hoursPerSkill = Number(
        document.getElementById("hoursPerSkill").value
    );

    let message = document.getElementById("plannerMessage");

    message.innerText = "";

    if (
        document.getElementById("dailyHours").value.trim() === "" ||
        !Number.isFinite(dailyHours) ||
        dailyHours <= 0 ||
        dailyHours > 24
    ) {
        message.innerText =
            "Enter daily study hours between 0 and 24.";
        document.getElementById("dailyHours").focus();
        return false;
    }

    if (
        document.getElementById("hoursPerSkill").value.trim() === "" ||
        !Number.isFinite(hoursPerSkill) ||
        hoursPerSkill <= 0
    ) {
        message.innerText =
            "Enter a skill learning time greater than 0.";
        document.getElementById("hoursPerSkill").focus();
        return false;
    }

    return true;
}


function generateLearningPlan() {
    if (!validateLearningPlanner()) {
    return;
}
    let career = careers[currentCareer];

    let allSkills = getCareerSkills(currentCareer);

    let dailyHours = Number(
        document.getElementById("dailyHours").value
    );

    let hoursPerSkill = Number(
        document.getElementById("hoursPerSkill").value
    );

    let remainingSkills = [];

    for (let i = 0; i < allSkills.length; i++) {
        let skill = allSkills[i];

        if (skillStatuses[skill] !== "completed") {
            remainingSkills.push(skill);
        }
    }

    let totalHours = remainingSkills.length * hoursPerSkill;
    let estimatedDays = Math.ceil(totalHours / dailyHours);

    document.getElementById("plannerRemaining").innerText =
        remainingSkills.length;

    document.getElementById("plannerTotalHours").innerText =
        totalHours;

    document.getElementById("plannerDays").innerText =
        estimatedDays;

    let weeklyPlan = document.getElementById("weeklyPlan");
    let plannerMessage = document.getElementById("plannerMessage");

    weeklyPlan.innerHTML = "";

    if (remainingSkills.length === 0) {
        plannerMessage.innerText =
            "Excellent! You have completed all skills in this roadmap.";
        return;
    }

    plannerMessage.innerText =
        "Your plan is based on " + dailyHours +
        " study hours per day and approximately " +
        hoursPerSkill + " hours per skill.";

    // Create a learning card for every remaining skill
    for (let i = 0; i < remainingSkills.length; i++) {
        let skill = remainingSkills[i];

        let startDay = Math.floor(
            (i * hoursPerSkill) / dailyHours
        ) + 1;

        let endDay = Math.ceil(
            ((i + 1) * hoursPerSkill) / dailyHours
        );

        let weekNumber = Math.ceil(startDay / 7);

        let card = document.createElement("div");
        card.className = "week-plan-card";

        let heading = document.createElement("h3");
        heading.innerText =
            "Week " + weekNumber +
            " — Day " + startDay +
            (endDay > startDay ? " to " + endDay : "");

        let description = document.createElement("p");
        description.innerText =
            "Focus on learning " + skill + ".";

        let list = document.createElement("ul");

        let item = document.createElement("li");
        item.innerText =
            skill + " — approximately " +
            hoursPerSkill + " study hours";

        list.appendChild(item);
        card.append(heading, description, list);
        weeklyPlan.appendChild(card);
    }
}


/* ============================= */
/* PHASE 7: CAREER COMPARISON */
/* ============================= */

function getCareerDisplayName(careerKey) {
    let career = careers[careerKey];

    if (career.title) {
        return career.title;
    }

    if (career.name) {
        return career.name;
    }

    return careerKey
        .replace(/_/g, " ")
        .replace(/-/g, " ")
        .replace(/\b\w/g, function(letter) {
            return letter.toUpperCase();
        });
}


function renderComparisonDropdowns() {
    let sourceSelect = document.getElementById("sourceCareer");
    let targetSelect = document.getElementById("targetCareer");

    sourceSelect.innerHTML = "";
    targetSelect.innerHTML = "";

    let careerKeys = Object.keys(careers);

    for (let i = 0; i < careerKeys.length; i++) {
        let careerKey = careerKeys[i];
        let careerName = getCareerDisplayName(careerKey);

        let sourceOption = document.createElement("option");
        sourceOption.value = careerKey;
        sourceOption.innerText = careerName;

        let targetOption = document.createElement("option");
        targetOption.value = careerKey;
        targetOption.innerText = careerName;

        sourceSelect.appendChild(sourceOption);
        targetSelect.appendChild(targetOption);
    }

    if (careerKeys.includes(currentCareer)) {
        sourceSelect.value = currentCareer;
    }

    if (careerKeys.length > 1) {
        for (let i = 0; i < careerKeys.length; i++) {
            if (careerKeys[i] !== sourceSelect.value) {
                targetSelect.value = careerKeys[i];
                break;
            }
        }
    }
}


function addSkillToList(listElement, skill) {
    let item = document.createElement("li");
    item.innerText = skill;
    listElement.appendChild(item);
}


function compareCareers() {
    let sourceCareer = document.getElementById("sourceCareer").value;
    let targetCareer = document.getElementById("targetCareer").value;

    let errorMessage = document.getElementById("comparisonError");
    let results = document.getElementById("comparisonResults");

    errorMessage.innerText = "";
    results.hidden = true;
    
    if (!careers[sourceCareer] || !careers[targetCareer]) {
        errorMessage.innerText = "Please select valid career paths.";
        return;
    }

    if (sourceCareer === targetCareer) {
        errorMessage.innerText =
            "Please select two different careers to compare.";
        return;
    }

    let sourceSkills = getCareerSkills(sourceCareer);
    let targetSkills = getCareerSkills(targetCareer);

    let sourceSkillNames = {};
    let commonSkills = [];
    let targetOnlySkills = [];

    // Store starting career skills for quick comparison.
    for (let i = 0; i < sourceSkills.length; i++) {
        let skillKey = sourceSkills[i].trim().toLowerCase();

        sourceSkillNames[skillKey] = true;
    }

    // Find shared skills and additional target skills.
    for (let i = 0; i < targetSkills.length; i++) {
        let skill = targetSkills[i];
        let skillKey = skill.trim().toLowerCase();

        if (sourceSkillNames[skillKey]) {
            commonSkills.push(skill);
        } else {
            targetOnlySkills.push(skill);
        }
    }

    document.getElementById("commonSkillCount").innerText =
        commonSkills.length;

    document.getElementById("targetOnlyCount").innerText =
        targetOnlySkills.length;

    let overlap = 0;

    if (targetSkills.length > 0) {
        overlap = Math.round(
            (commonSkills.length / targetSkills.length) * 100
        );
    }

    document.getElementById("skillOverlap").innerText =
        overlap + "%";

    let commonSkillsList = document.getElementById("commonSkillsList");
    let targetOnlySkillsList = document.getElementById("targetOnlySkillsList");

    commonSkillsList.innerHTML = "";
    targetOnlySkillsList.innerHTML = "";

    if (commonSkills.length === 0) {
        addSkillToList(commonSkillsList, "No common skills found.");
    } else {
        for (let i = 0; i < commonSkills.length; i++) {
            addSkillToList(commonSkillsList, commonSkills[i]);
        }
    }

    if (targetOnlySkills.length === 0) {
        addSkillToList(
            targetOnlySkillsList,
            "No additional skills found."
        );
    } else {
        for (let i = 0; i < targetOnlySkills.length; i++) {
            addSkillToList(targetOnlySkillsList, targetOnlySkills[i]);
        }
    }

    let sourceName = getCareerDisplayName(sourceCareer);
    let targetName = getCareerDisplayName(targetCareer);

    let conclusion = "";

    if (targetOnlySkills.length === 0) {
        conclusion =
            "Your selected starting career already covers all the skills " +
            "listed for " + targetName + ". Review the target roadmap to " +
            "check your actual proficiency.";
    } else {
        conclusion =
            "Moving from " + sourceName + " to " + targetName +
            " requires learning " + targetOnlySkills.length +
            " additional skill(s) from the target roadmap. " +
            "Start with the foundational skills and mark each skill " +
            "completed as you learn it.";
    }

    document.getElementById("comparisonConclusion").innerText =
        conclusion;

    results.hidden = false;
}



/* =====================================
   PHASE 8.4.1: ASSESSMENT VALIDATION
===================================== */


function validateAssessment() {
    let name = document.getElementById("studentName").value.trim();
    let career = document.getElementById("selectedCareer").value;
    let error = document.getElementById("formError");

    error.innerText = "";

    if (name === "") {
        error.innerText = "Please enter your name.";
        document.getElementById("studentName").focus();
        return false;
    }

    if (!careers[career]) {
        error.innerText = "Please select a valid career path.";
        return false;
    }

    return true;
}






document.getElementById("compareCareersBtn").addEventListener(
    "click",
    function() {
        compareCareers();
    }
);


document.getElementById("generatePlanBtn").addEventListener("click", function() {
    generateLearningPlan();
});



// Get Started button
document.getElementById("getStartedBtn").addEventListener(
    "click",
    function() {
        careerCards.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
);

// Logo click
document.getElementById("logo").addEventListener("click", function(event) {
    event.preventDefault();
    showPage(homePage);
});

// Back buttons
document.getElementById("backToHome").addEventListener("click", function() {
    showPage(homePage);
});

document.getElementById("backToAssessment").addEventListener(
    "click",
    function() {
        showPage(assessmentPage);
    }
);

// Generate button
document.getElementById("generateBtn").addEventListener(
    "click",

    generateRoadmap
);

// Create another roadmap
document.getElementById("startAgainBtn").addEventListener(
    "click",
    function() {
        knownSkills = [];
        studentName.value = "";
        experienceLevel.value = "beginner";
        currentCareer = "java";

        selectedCareer.value = currentCareer;

        renderSkillCheckboxes();
        showPage(homePage);
        localStorage.removeItem(storageKey);
    }
);


document.getElementById("saveProgressBtn").addEventListener("click", function() {
    saveProgress();
});

document.getElementById("restoreProgressBtn").addEventListener("click", function() {
    restoreProgress();
});

document.getElementById("resetProgressBtn").addEventListener("click", function() {
    let confirmReset = confirm(
        "Are you sure you want to delete your saved SkillMap progress?"
    );

    if (confirmReset) {
        localStorage.removeItem(storageKey);

        document.getElementById("storageMessage").innerText =
            "Saved progress deleted. Your current roadmap is still open.";
    }
});


document.getElementById("skillSearch").addEventListener("input", function() {
    renderSkillExplorer();
});

document.getElementById("skillFilter").addEventListener("change", function() {
    renderSkillExplorer();
});

document.getElementById("closeSkillDetails").addEventListener("click", function() {
    document.getElementById("skillDetailModal")
        .classList.remove("active");
});

// Change career from dropdown
selectedCareer.addEventListener("change", function() {
    currentCareer = selectedCareer.value;
    knownSkills = [];

    renderSkillCheckboxes();
});

// Start the application
renderCareerCards();
renderCareerDropdown();
renderSkillCheckboxes();
renderComparisonDropdowns();

showPage(homePage);

