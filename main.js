var images=
["family.jpg","dad.jpg","mom.jpg","himawari.png","shinchan.webp",
"shiro.jpg","grand father.jpg","grand mother.png","nanji.jpg",
"naniji.jpg"];

var names=["Family-Nohara","Hiroshi Nohara","Mixi Nohara","Himawari Nohara","ShinChan Nohara",
"Shiro","Ginnosuke Nohara","Tsuru Nohara","yoshiji Nohara","hisae Nohara"];

var i= 0;
function update()
{
 i++;
 var numbers_of_family_member_in_array = 9  
  if(i > numbers_of_family_member_in_array)
  {
      i = 0;
  }
  var updatedimage = images[i];
  var updatedname = names[i];
  document.getElementById("family_member_image").src = updatedimage;
  document.getElementById("family-member_name").innerHTML = updatedname;
    document.getElementById("fam").style.display="none";
}