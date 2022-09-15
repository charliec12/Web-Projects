function binaryAND(){
  var binaryA;
  var binaryB;
  var binaryOp;

  buildHeader();

    for(i=0;i<=1;i++){
      binaryA = i;
      for(j=0;j<=1;j++){
        binaryB = j;

        if(binaryA==binaryB){
          binaryOp=1;
          //Insert data
          buildTable(binaryA,binaryB,binaryOp);

        }else{
          binaryOp=0;
          buildTable(binaryA,binaryB,binaryOp);
        }
      }
    }

}

function binaryOR(){
  var binaryA;
  var binaryB;
  var binaryOp;

  buildHeader();

    for(i=0;i<=1;i++){
      binaryA = i;
      for(j=0;j<=1;j++){
        binaryB = j;

        if(binaryA==1 || binaryB==1){
          binaryOp=1;
          //Insert data
          buildTable(binaryA,binaryB,binaryOp);

        }else{
          binaryOp=0;
          buildTable(binaryA,binaryB,binaryOp);
        }
      }
    }

}

function binaryNOT(){

  var binaryA;
  var binaryB;
  var binaryOp;
  
  buildHeader();

    for(i=0;i<=1;i++){
      binaryA = i;
      for(j=0;j<=1;j++){
        binaryB = j;

        if(binaryA!=binaryB){
          binaryOp=1;
          //Insert data
          buildTable(binaryA,binaryB,binaryOp);

        }else{
          binaryOp=0;
          buildTable(binaryA,binaryB,binaryOp);
        }
      }
    }

}

function binaryXOR(){

  var binaryA;
  var binaryB;
  var binaryOp;

  //Header row
  buildHeader();

    for(i=0;i<=1;i++){
      binaryA = i;
      for(j=0;j<=1;j++){
        binaryB = j;

        if(binaryA==0 && binaryB==0 || binaryA==1 && binaryB==1){
          binaryOp=0;
          //Insert data
          buildTable(binaryA,binaryB,binaryOp);

        }else{
          binaryOp=1;
          buildTable(binaryA,binaryB,binaryOp);
        }
      }
    }

}

function buildHeader(){
  var dataTable = document.getElementById('data');
  dataTable.innerHTML = '';

  var row = dataTable.insertRow(0);
  var aCell = row.insertCell(0);
  var bCell = row.insertCell(1);
  var opCell = row.insertCell(2);

  aCell.innerHTML = 'A';
  bCell.innerHTML = 'B';
  opCell.innerHTML = 'A||B';
}

function buildTable(binaryA,binaryB,binaryOp){
  var dataTable = document.getElementById('data');
  var row;
  var binaryACell;
  var binaryBCell;
  var binaryOpCell;

  row = dataTable.insertRow(-1);
  binaryACell = row.insertCell(0);
  binaryBCell = row.insertCell(1);
  binaryOpCell = row.insertCell(2);

  binaryACell.innerHTML = binaryA;
  binaryBCell.innerHTML = binaryB;
  binaryOpCell.innerHTML = binaryOp;
}
