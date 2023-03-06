export function rotate(cc, input) {
  if (input === "L") {
    switch (cc) {
      case 0:
        cc = 3;
        console.log("cc", cc);
        return cc;
      case 1:
        cc = 0;
        console.log("cc", cc);
        return cc;
      case 2:
        cc = 1;
        console.log("cc", cc);
        return cc;
      case 3:
        cc = 2;
        console.log("cc", cc);
        return cc;
    }
  }
  if (input === "R") {
    switch (cc) {
      case 0:
        cc = 1;
        console.log("cc", cc);
        return cc;
      case 1:
        cc = 2;
        console.log("cc", cc);
        return cc;
      case 2:
        cc = 3;
        console.log("cc", cc);
        return cc;
      case 3:
        cc = 0;
        console.log("cc", cc);
        return cc;
    }
  }
}
