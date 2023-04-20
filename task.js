function calculate() {
    const numGroups = parseInt(document.getElementById("num-groups-input").value);
  
    if (isNaN(numGroups)) {
      alert("This is not a number xD. Please enter valid number!");
      return;
    }
  
    let groups = [];
    for (let i = 0; i < numGroups; i++) {
      let group = [];
      for (let j = 0; j < 3; j++) {
        group.push(Math.round(Math.random()));
      }
      groups.push(group);
    }

    let jumps = 0;
    for (let i = 0; i < numGroups; i++) {
      if (groups[i].includes(1)) {
        jumps++;
      }
    }

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Jumps: ${jumps}<br>Groups: ${JSON.stringify(groups)}`;
  }