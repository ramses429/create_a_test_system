const a = [
  "FrontEnd-859cdf89-fc52-44b1-bd70-21d86b50dd57.xml",
  "FrontEnd-b1ea2e87-cdd0-4155-a0c0-05e238092f74.xml",
  "FrontEnd-ea99996e-cd9e-4e22-9d2b-92a89f978d5f.xml",
  "FrontEnd-f272da86-f52f-4b16-8b4e-697b5e0dac95.xml",
  "FrontEnd-8892a315-7965-443b-98de-304ed4773abf.xml",
  "FrontEnd-d683ce32-47d3-4020-b715-b14df3b09e91.xml",
  "FrontEnd-fb00843a-a6b6-441f-b069-fe4ea219715a.xml",
  "FrontEnd-68985f67-5598-43d3-ac15-95224f071f8a.xml",
  "FrontEnd-ab8ea7d7-6b4a-4e79-9e6b-1691722f404e.xml",
  "FrontEnd-1ea42997-395d-4f31-8a42-5d3e671f79cf.xml",
];

let d = "";
a.forEach((number, index) => {
  if (a.length === index + 1) d = d + `Name = '${number}'`;
  else d = `Name = '${number}'` + " " + "OR" + " " + d;
});

console.log(d);
