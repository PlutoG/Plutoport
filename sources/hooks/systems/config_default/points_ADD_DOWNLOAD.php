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
 * @package		downloads
 */

class Hook_config_default_points_ADD_DOWNLOAD
{

	/**
	 * Gets the details relating to the config option.
	 *
	 * @return ?array		The details (NULL: disabled)
	 */
	function get_details()
	{
		return array(
			'human_name'=>'ADD_DOWNLOAD',
			'the_type'=>'integer',
			'the_page'=>'POINTS',
			'section'=>'COUNT_POINTS_GIVEN',
			'explanation'=>'CONFIG_OPTION_points_ADD_DOWNLOAD',
			'shared_hosting_restricted'=>'0',
			'c_data'=>'',

			'addon'=>'downloads',
		);
	}

	/**
	 * Gets the default value for the config option.
	 *
	 * @return ?string		The default value (NULL: option is disabled)
	 */
	function get_default()
	{
		return addon_installed('points')?'150':NULL;
	}

}


