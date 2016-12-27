function calcular()
{
	var talking = document.getElementById("hablando").value;
	var hora = parseInt(document.getElementById("time").value);

	var habla = true;

	var salida = document.getElementById("salida");

	if(talking == "si")
	{
		habla = true;
	}
	if(talking == "no")
	{
		habla = false;
		
	}
	if(habla)
	{
		if(hora < 7 || hora>20 )
		{
			salida.innerHTML = 1;
		
		
	
		}
		else
		{
			salida.innerHTML = 0;

		
	
		}
	}
	
}
