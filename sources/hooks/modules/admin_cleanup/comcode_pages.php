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
 * @package		core_comcode_pages
 */

class Hook_comcode_pages
{

	/**
	 * Standard modular info function.
	 *
	 * @return ?array	Map of module info (NULL: module is disabled).
	 */
	function info()
	{
		require_lang('zones');

		$info=array();
		$info['title']=do_lang_tempcode('COMCODE_PAGES');
		$info['description']=do_lang_tempcode('DESCRIPTION_COMCODE_PAGE_CACHE');
		$info['type']='cache';

		return $info;
	}

	/**
	 * Standard modular run function.
	 *
	 * @return tempcode	Results
	 */
	function run()
	{
		require_lang('zones');
		require_code('zones3');

		erase_comcode_page_cache();

		return new ocp_tempcode();
	}

}


