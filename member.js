function skillsMember() {
  var member = document.getElementById("member");
  var skills = document.getElementById("skills");
  var memberLeft = member.getBoundingClientRect().left;
  var memberTop = member.getBoundingClientRect().top;
  var memberWidth = member.offsetWidth;
  var memberHeight = member.offsetHeight;
  var skillsWidth = skills.offsetWidth;
  var skillsHeight = skills.offsetHeight;
  var skillsLeft = memberLeft + memberWidth / 2 - skillsWidth / 2;
  var skillsTop = memberTop + memberHeight + 10;
  skills.style.left = skillsLeft + "px";
  skills.style.top = skillsTop + "px";
}