<?php /*

 ocPortal
 Copyright (c) ocProducts, 2004-2012

 See text/EN/licence.txt for full licencing information.


 NOTE TO PROGRAMMERS:
   Do not edit this file. If you need to make changes, save your changed file to the appropriate *_custom folder
   **** If you ignore this advice, then your website upgrades (e.g. for bug fixes) will likely kill your changes ****

*/

/**
 * @license		http://opensource.org/licenses/cpal_1.0 Common Public Attribution License
 * @copyright	ocProducts Ltd
 * @package		devguide
 */

class Block_main_block_help
{

	/**
	 * Standard modular info function.
	 *
	 * @return ?array	Map of module info (NULL: module is disabled).
	 */
	function info()
	{
		$info=array();
		$info['author']='Chris Graham';
		$info['organisation']='ocProducts';
		$info['hacked_by']=NULL;
		$info['hack_version']=NULL;
		$info['version']=2;
		$info['locked']=false;
		$info['parameters']=array();
		return $info;
	}

	/**
	 * Standard modular run function.
	 *
	 * @param  array		A map of parameters.
	 * @return tempcode	The result of execution.
	 */
	function run($map)
	{
		unset($map);

		require_all_lang();

		$blocks=new ocp_tempcode();

		require_code('zones2');
		require_code('zones3');
		$_blocks=find_all_blocks();

		foreach (array_keys($_blocks) as $block)
		{
			$description=do_lang('BLOCK_'.$block.'_DESCRIPTION',NULL,NULL,NULL,NULL,false);
			if (is_null($description)) continue;
			$use=do_lang('BLOCK_'.$block.'_USE');

			$_parameters=get_block_parameters($block);
			if (!is_array($_parameters)) continue;
			$parameters=new ocp_tempcode();
			foreach ($_parameters as $parameter)
			{
				$_description=do_lang('BLOCK_'.$block.'_PARAM_'.$parameter,NULL,NULL,NULL,NULL,false);
				if (is_null($_description)) continue;
				$parameters->attach(do_template('BLOCK_MAIN_BLOCK_HELP_PARAMETER',array('_GUID'=>'f23db88061922a68cc2401256cf69ad3','NAME'=>$parameter,'DESCRIPTION'=>$_description)));
			}

			$blocks->attach(do_template('BLOCK_MAIN_BLOCK_HELP',array('_GUID'=>'00652313faa72feac0a07d77e2dddd84','NAME'=>$block,'DESCRIPTION'=>$description,'USE'=>$use,'PARAMETERS'=>$parameters)));
		}

		return $blocks;
	}

}


