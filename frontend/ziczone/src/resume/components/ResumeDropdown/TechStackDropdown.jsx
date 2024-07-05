import React from 'react';
import './../../styles/TechDropdown.css';

const TechDropdown = ({ selectedItems, updateSelectedItems, filter }) => {
    const TechDropdownContent = [
        "JavaScript",
        "Python",
        "Java",
        "C#",
        "C++",
        "Swift",
        "PHP",
        "Ruby",
        "Kotlin",
        "TypeScript",
        "Go",
        "Rust",
        "Dart",
        "React",
        "Angular",
        "Vue.js",
        "Svelte",
        "Backbone.js",
        "Node.js",
        "Express.js",
        "Django",
        "Flask",
        "Ruby on Rails",
        "Spring Boot",
        "ASP.NET",
        "Laravel",
        "NestJS",
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "MongoDB",
        "Redis",
        "Oracle",
        "Microsoft SQL Server",
        "Firebase",
        "Cassandra",
        "MariaDB",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Git Lab CI/CD",
        "Travis CI",
        "AWS",
        "Azure",
        "Google Cloud Platform",
        "Naver Cloud Platform",
        "Terraform",
        "Ansible",
        "Chef",
        "Git",
        "GitHub",
        "Bitbucket",
        "React Native",
        "Flutter",
        "Xamarin",
        "Ionic",
        "NativeScript",
        "GraphQL",
        "RESTful APIs",
        "WebSocket",
        "RabbitMQ",
        "Kafka",
        "Elasticsearch",
        "Solr",
        "JIRA",
        "Trello",
        "Confluence",
        "Jest",
        "Mocha",
        "Jasmine",
        "Cypress",
        "Selenium",
        "JUnit",
        "PyTest",
    ];

    const handleCheckboxChange = (tech) => {
        if (selectedItems.includes(tech)) {
            updateSelectedItems(selectedItems.filter(item => item !== tech));
        } else if (selectedItems.length < 7) {
            updateSelectedItems([...selectedItems, tech]);
        }
    };

    // 입력값을 기반으로 기술 목록을 필터링
    const filteredTech = TechDropdownContent.filter(tech =>
        tech.toLowerCase().includes(filter.toLowerCase())
    );


    return (
        <div className="tech_dropdown_list">
            {filteredTech.map((tech, index) => (
                <div key={index}>
                    <input type="checkbox"
                        checked={selectedItems.includes(tech)}
                        onChange={() => handleCheckboxChange(tech)}
                    />
                    {tech}
                </div>
            ))}
        </div>
    );
}

export default TechDropdown;
