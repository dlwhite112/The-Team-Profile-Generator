const allCards = [];

const managerCard = (manager) => {
  return `<div class="d-inline-flex" style="padding: 2rem;">
    <div class="card border-light mb-3" style="max-width: 18rem;">
        <div class="card-body bg-primary text-white">
          <h5 class="card-title">${manager.name}<br>Manager
          </h5>
        </div>
        <ul class="list-group list-group-flush bg-light text-dark">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
      </div>
      </div>`;
};
const internCard = (intern) => {
  return `<div class="d-inline-flex" style="padding: 2rem;">
    <div class="card border-light mb-3" style="max-width: 18rem;">
        <div class="card-body bg-primary text-white">
          <h5 class="card-title">${intern.name}<br>
          Intern</h5>
        </div>
        <ul class="list-group list-group-flush bg-light text-dark">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
      </div>
      </div>`;
};
const engineerCard = (engineer) => {
  return `<div class="d-inline-flex" style="padding: 2rem;">
    <div class="card border-light mb-3" style="max-width: 18rem;">
        <div class="card-body bg-primary text-white">
          <h5 class="card-title">${engineer.name}<br>
          Engineer</h5>
        </div>
        <ul class="list-group list-group-flush bg-light text-dark">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
        </ul>
      </div>
      </div>`;
};
const markdownHtml = (allCards) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <style>div.card {
      width: 250px;
      box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 7px 21px 0 rgba(0, 0, 0, 0.19);
      text-align: center;
    }</style>
    <title>My Team</title>
</head>
<body>
    <div class="conatiner">
        <div class="p-3 mb-2 bg-danger text-white">
            <div class="col-lg" style="margin:3rem">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>

   
    <div class="mx-auto" style="width: 1000px;">
    ${allCards}

</div>
</body>
</html>`;
};

module.exports = {
  allCards,
  managerCard,
  markdownHtml,
  engineerCard,
  internCard,
};
