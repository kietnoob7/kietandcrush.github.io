function tinhdiem(){
	var bt1 = document.getElementById("bt1").value;
	var bt2 = document.getElementById("bt2").value;
	var btgk = document.getElementById("btgk").value;
	var kk = document.getElementById("kk").value;
	var thi = document.getElementById("thi").value;

	var x = (bt1 * 0.1) + (bt2 * 0.15) + (btgk * 0.2) + (kk * 0.05) + (thi * 0.5);
	alert(x);
}

