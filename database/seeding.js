const fs = require('fs');
const path = require('path');

function getRandomName() {
  return Math.floor(Math.random() * 300);
}

const firstName = ['Octavio', 'Javier', 'Davin', 'Grant', 'Salvatore', 'Ayaan', 'Dorian', 'Clay', 'Raymond', 'Guillermo', 'Cole', 'Curtis', 'Ace', 'Brian', 'Rex', 'Charles', 'Hezekiah',  'Clarence', 'Joe', 'Brenden', 'Ronin', 'Mark', 'Matteo', 'Davian', 'Fisher', 'Brodie', 'Adam', 'Mike', 'Alexander', 'Phillip', 'Trystan', 'Judah', 'Mauricio', 'Collin', 'Luke', 'Clayton', 'Killian', 'Layton', 'Lee', 'Mateo', 'Noe', 'Kylan', 'Simon', 'Alberto', 'Julian', 'Ezra', 'Alan', 'Kian', 'Aiden', 'Abraham', 'Moises', 'Pierce', 'Quinn', 'Bernard', 'Keyon', 'Byron', 'Duncan', 'Drew', 'Dwayne', 'Rayan', 'Darren', 'Brennen', 'Orion', 'Soren', 'Howard', 'Jonah', 'Samir', 'Shamar',
  'Gaven', 'Santiago', 'Titus', 'Nathaniel', 'Makhi', 'Keaton', 'German', 'Gunner', 'Ben', 'Chance', 'Deon', 'Mohammad', 'Tommy', 'Odin', 'Jaime', 'Callum', 'Wyatt', 'Kolby', 'Kole', 'Giovani', 'Blake', 'Kamden', 'Larry', 'Jessie', 'Skylar', 'Korbin', 'Boston', 'Andrew',
  'Jonas', 'Peter', 'Davion', 'Gerald', 'Uriah', 'Ari', 'Ethan', 'Isaac', 'Justice', 'Clinton', 'Marquise',
  'Jaxon', 'Cannon', 'Landon', 'Trevin', 'Sterling', 'Timothy', 'Sidney', 'Mitchell', 'Ezekiel', 'Jett', 'Shane', 'Darion', 'Harry', 'Dominique', 'Braydon', 'Nathan', 'Tyrone', 'Terrell', 'David', 'Caleb', 'Grayson', 'Cassius', 'Jadon', 'Malaki', 'Aidan', 'Reuben', 'Brayden', 'Eli', 'Jay', 'Landin', 'Ahmed', 'Angelo', 'Paul', 'Armani', 'Martin', 'Aryan', 'London', 'Zaire', 'Stephen', 'Danny',
  'Alejandro', 'Maximillian', 'Roman', 'Alfred', 'Hassan', 'Johnathon', 'Santos', 'Lorenzo', 'Rafael', 'Reid', 'Marley', 'Damari', 'Ali', 'Ishaan', 'Maddox', 'Eugene', 'Slade', 'Remington',
  'Randall','Morgan','Nathen','Damarion','Lucian','Giovanny','Marques','Jaylon','Harrison','Conor', 'Jovani', 'Jordon', 'Amir', 'Anderson', 'Moshe', 'Kendall', 'Nigel', 'Isaias', 'Nicholas', 'Rodney',
  'Devyn', 'Noel', 'Adriel', 'Avery', 'Allan', 'Douglas', 'Elisha', 'Konnor', 'Bentley', 'Eddie', 'Casey', 'Donte', 'Kameron', 'Brent', 'Broderick', 'Semaj', 'Anthony', 'Dustin', 'Aaden', 'Oscar', 'Mathew', 'Jordyn', 'Zaid', 'Jovan', 'Roderick', 'Lukas', 'Immanuel', 'Brogan', 'Jovanny', 'Emanuel', 'Beau', 'John', 'Angel', 'Kash', 'Issac', 'Adan', 'Kenneth', 'Derick', 'Leland', 'Toby', 'Brennan', 'Demarion',
  'Memphis', 'Eliezer', 'Braedon', 'Hudson', 'Keenan', 'Ross', 'Davon', 'Bobby', 'Griffin', 'Tyler',
  'Lucas', 'Kayden', 'Kaleb', 'Marcelo', 'Moses', 'Triston', 'Jensen', 'Seth', 'Gavyn', 'Antony', 'Joel', 'Giancarlo', 'Terry', 'Eduardo', 'Brice', 'Osvaldo', 'Roland', 'Krish', 'Robert', 'Finnegan',
  'Samuel', 'Aidyn', 'Kadin', 'Bailey', 'Jayce', 'Kael', 'Gary', 'Cristofer', 'Jerome', 'Devin', 'Arturo', 'Reginald', 'Jaylan', 'Bryce', 'Cason', 'Kolten', 'Chaim', 'Addison', 'Gordon', 'Zackery', 'Abel', 'Hugh', 'Kristian', 'Omari', 'Wesley', 'Khalil', 'Arjun', 'Cameron', 'Donald', 'Johnathan',
  'Tristan', 'Bruce', 'Aden', 'Carlos', 'Jordan', 'Karson', 'Zain', 'Izayah', 'Jasiah', 'Cortez', 'Josiah', 'Elliott', 'Blake'
];

const lastName = [
  'Singer', 'Barnett', 'Tran', 'Collins', 'Conley', 'Cook', 'Shelton', 'Lester', 'Wilkerson', 'Oconnell', 'Mcintosh', 'Hill', 'Freeman', 'Galloway', 'Lee', 'Wise', 'Pham', 'Stout',
  'Vance', 'Oneill', 'Turner', 'Obrien', 'Hunter', 'Harding', 'Webb', 'Kirk', 'Mclean', 'Walsh', 'Wallace', 'Mccarthy', 'Boone', 'Reid', 'Melton', 'Chen', 'Stark', 'Allen', 'Cherry',
  'Hester', 'Fields', 'Bond', 'Yu', 'Thornton', 'Villarreal', 'Singh', 'Michael', 'Frey', 'Meza', 'Stone', 'Cuevas', 'Jennings', 'Henderson', 'Finley', 'Snow', 'Shepard', 'Smith', 'Lynch', 'Noble', 'Hensley',
  'Love', 'Bruce', 'Patel', 'Burton', 'Clayton', 'Shah', 'Mcpherson', 'Davila', 'Rich', 'Trevino',
  'Mckenzie', 'Farmer', 'Chavez', 'Torres', 'Washington', 'Serrano', 'Macdonald', 'Sanders', 'Skinner', 'Allison', 'Bradshaw', 'Webster', 'Salas', 'Esparza', 'Waller', 'Ball', 'Green', 'Bailey',
  'Romero', 'Montgomery', 'Lambert', 'Mora', 'Neal', 'Pena', 'Braun', 'Hicks', 'Jimenez', 'Le', 'Park', 'Stafford', 'Ward', 'House', 'Kirby', 'Grant', 'Maxwell', 'Kidd', 'Wall', 'Ware', 'Butler', 'Acevedo', 'Henry', 'Heath', 'Lozano', 'Lawrence', 'Walter', 'Ayers', 'Douglas', 'Garrison', 'Walton', 'Jefferson', 'Odonnell', 'Bowen', 'Patton', 'Fowler', 'Avery', 'Cisneros', 'Estrada', 'Graves', 'Foley', 'Meadows', 'Drake', 'Friedman', 'Irwin', 'Hodges', 'Barrett', 'York', 'Buchanan', 'Booker', 'Pugh', 'Harmon', 'Stanton', 'Delgado', 'Walker', 'Duarte', 'Garrett', 'Gomez', 'Cooley', 'Cervantes', 'Evans', 'Peterson', 'Nixon', 'Bullock', 'Zhang', 'Gaines', 'Wagner', 'Holden', 'Burke','Barton','Hobbs','Gutierrez','Stephenson','Rivas','Silva','Jordan','Beltran','Mcintyre', 'Glenn', 'Ho', 'Moran', 'Kerr', 'Haney', 'Blair', 'Sherman', 'Rogers', 'Strickland', 'Norris', 'Johnston', 'Navarro', 'Garcia', 'Wright', 'Benitez', 'Mcclain', 'Glover', 'Zimmerman', 'Fuentes', 'Fischer', 'Ayala', 'Palmer', 'Mcmahon', 'Rowland', 'Dominguez', 'Benjamin', 'Benton', 'Clay', 'Carey', 'Wiggins', 'Barry', 'Kane', 'Sharp', 'Whitaker', 'Davis', 'Sosa', 'Terry', 'Robbins', 'Guerrero', 'Morrow', 'Humphrey', 'Marsh', 'Miles', 'Carr', 'Villanueva', 'Larson', 'Gill', 'Gibbs', 'Ibarra', 'Morales', 'Lin', 'Barr', 'Bean', 'Carrillo', 'Compton', 'Rojas', 'Hood', 'Cooper', 'Burnett', 'Lopez', 'Pacheco', 'Robles', 'Kaiser', 'Wade', 'Daugherty', 'Pope', 'Hansen', 'Adams', 'Crane', 'Murillo', 'Gregory', 'Hubbard', 'Huynh', 'Ashley', 'Moyer', 'Dickerson', 'Camacho', 'White', 'Watts', 'Bush', 'Mcdowell', 'Holmes', 'Watkins', 'Browning', 'Gardner', 'Holloway', 'Rowe', 'Velazquez', 'Mathis', 'Wu', 'Carson', 'Owen', 'Ortega', 'Martin', 'Tate', 'Hughes', 'Welch', 'Monroe', 'Paul', 'Jacobs', 'Barker', 'Dunn', 'Whitney', 'Krueger', 'Hayes', 'Mckinney', 'Page', 'Nolan', 'Reilly', 'Fleming', 'Ryan', 'Mata', 'Aguirre', 'Gould','Mathews', 'Cox', 'Clarke', 'Guzman', 'Boyer', 'Montes', 'Holder', 'Mack', 'Miller', 'Rose', 'Yang', 'Hardy', 'Logan', 'Stewart', 'Bell', 'Merritt', 'David', 'Velez', 'Garza', 'Jarvis', 'Whitehead', 'Hutchinson', 'Landry',
]

let data = `${firstName[getRandomName()]} ${lastName[getRandomName()]}, this is a random address, [], [], []\n`;
let writer = fs.createWriteStream(__dirname + '/writeMe.txt');
let encoding = 'utf8';
function writeTenMilliontimes(writer, data, encoding, callback) {
  let i = 10000000;
  function write () {
    let ok = true;
    do {
      i--;
      if(i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMilliontimes(writer, data, encoding, function() {
  if(Error) {
    console.log('error')
  } else {
    console.log('success')
  }
})
