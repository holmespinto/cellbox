<?php

/***************************************************************************\
 *  SPIP, Systeme de publication pour l'internet                           *
 *                                                                         *
 *  Copyright (c) 2001-2017                                                *
 *  Arnaud Martin, Antoine Pitrou, Philippe Riviere, Emmanuel Saint-James  *
 *                                                                         *
 *  Ce programme est un logiciel libre distribue sous licence GNU/GPL.     *
 *  Pour plus de details voir le fichier COPYING.txt ou l'aide en ligne.   *
\***************************************************************************/

if (!defined('_ECRIRE_INC_VERSION')) {
	return;
}
		include_spip('base/connect_sql');
		include_spip('inc/filtres_ecrire');
		include_spip('inc/filtres');
		include_spip('inc/utils');
		include_spip('inc/json');
 
 include_spip('exec/model/claseapi');
 $tbl='perecederos';
		switch ($_POST['opcion']) {
		case 'consultar':
			
			$query='';
			
			$select='*';
			$app=new Apis($tbl);
			$row=$app->consultadatos($query,$select);
			
			if (!is_null($row)) {
			$var = var2js($row);	
			echo $var;
			}else{

			$records[] = array(
                                'id'=>1,
                                'codigo'=>'Aun no existen categorias cargadas',
								'codigobarra'=>'null',
								'nombreproducto'=>'null',
								'marca'=>'null',
								'presentacion'=>'null',
								'vence'=>'null',
								'cantidad'=>'null',
								'status'=>'Deactivated',	
					
                            );
					
				$var = var2js($records);	
				echo $var;					
			}
			
			break;
			case 'guardar':
					$chartic=array();
					//LA ASIGNO A LA CLASE
					$perece=new Apis($tbl);
					//CARGO EL ARRAY
					
					$chartic['codigo']=$_POST['codigo'];
					$chartic['codigobarra']=$_POST['codigobarra'];
					$chartic['nombreproducto']=$_POST['nombreproducto'];
					$chartic['marca']=$_POST['marca'];
					$chartic['presentacion']=$_POST['presentacion'];
					$chartic['vence']=$_POST['vence'];
					$chartic['cantidad']=$_POST['cantidad'];
					$chartic['status']=$_POST['status'];
					
					
					//GUARDO
					$id=$perece->guardar($chartic);
					
					//VERIFICO
						if($id>0){
								$msg[] = array('id'=>1,'menssage'=>'Perecederos fue guardado con exito!!');
						}else{
								$msg[] = array('menssage'=>'ERROR. E Perecederos no se pudo guardar!');
						}
				//IMPRIMO RESPUESTA		
				$var = var2js($msg);	
				echo $var;
			break;
			case 'actualizar':
					$chartic=array();
											
						$apps=new Apis($tbl);
						
						$chartic['codigo']=$_POST['codigo'];
						$chartic['codigobarra']=$_POST['codigobarra'];
						$chartic['nombreproducto']=$_POST['nombreproducto'];
						$chartic['marca']=$_POST['marca'];
						$chartic['presentacion']=$_POST['presentacion'];
						$chartic['vence']=$_POST['vence'];
						$chartic['cantidad']=$_POST['cantidad'];
						$chartic['status']=$_POST['status'];
						
						$apps->actualizar($chartic,'id',$_POST['id']);
						$msg[] = array('menssage'=>'OK. El perecederos :  fue actualizado correctamente!');
						$var = var2js($msg);	
						echo $var;				
			
			break;
			case 'eliminar':
			
					sql_delete("perecederos","id=" . intval($_POST['id']));
					$msg[] = array('menssage'=>'OK. El registro fue eliminado correctamente!');
					$var = var2js($msg);	
					echo $var;					
			break;
			break;
			
		}

													
?>
