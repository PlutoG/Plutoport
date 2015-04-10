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
 * @package		galleries
 */

class Hook_config_default_show_gallery_counts
{

	/**
	 * Gets the details relating to the config option.
	 *
	 * @return ?array		The details (NULL: disabled)
	 */
	function get_details()
	{
		return array(
			'human_name'=>'SHOW_GALLERY_COUNTS',
			'the_type'=>'tick',
			'the_page'=>'FEATURE',
			'section'=>'GALLERIES',
			'explanation'=>'CONFIG_OPTION_show_gallery_counts',
			'shared_hosting_restricted'=>'0',
			'c_data'=>'',

			'addon'=>'galleries',
		);
	}

	/**
	 * Gets the default value for the config option.
	 *
	 * @return ?string		The default value (NULL: option is disabled)
	 */
	function get_default()
	{
		$old=get_value('show_gallery_counts');
		return is_null($old)?((get_forum_type()=='ocf')?'0':NULL):$old;
	}

}


