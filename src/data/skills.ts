export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
      { name: "C", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
      { name: "R", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg" },
      { name: "SQL", icon: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_sql.svg" }, 
      { name: "Go", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" },
    ],
  },
  {
    title: "Data Science & AI",
    items: [
      { name: "NumPy", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" },
      { name: "Pandas", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" },
      { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/2048px-Matplotlib_icon.svg.png" }, 
    ],
  },
  {
    title: "Big Data",
    items: [
      { name: "Spark", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apachespark/apachespark-original.svg" },
      { name: "Hadoop", icon: "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg" },
      { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
      { name: "Neo4J", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/neo4j/neo4j-original.svg" },
    ],
  },
  {
    title: "Full-Stack",
    items: [
      { name: "Spring Boot", icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" }, 
      { name: "FastAPI", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" },
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
      { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
      { name: "Linux", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
      { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" }, 
    ],
  },
  {
    title: "Desktop & Embedded",
    items: [
      { name: "Qiskit", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/qiskit.svg" },
      { name: "Kivy", icon: "https://www.svgrepo.com/show/373726/kivy.svg" },
      { name: "Tkinter", icon: "https://www.svgrepo.com/show/374119/tcl.svg" }, 
      { name: "OpenGL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opengl/opengl-original.svg" },
      { name: "IoT", icon: "https://cdn-icons-png.flaticon.com/512/3659/3659738.png" }, 
    ],
  },
];