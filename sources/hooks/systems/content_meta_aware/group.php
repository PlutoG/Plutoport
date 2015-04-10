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
 * @package		core_ocf
 */

class Hook_content_meta_aware_group
{

	/**
	 * Standard modular info function for content_meta_aware hooks. Allows progmattic identification of ocPortal entity model (along with db_meta table contents).
	 *
	 * @return ?array	Map of award content-type info (NULL: disabled).
	 */
	function info()
	{
		return array(
			'content_type_label'=>'GROUP',

			'table'=>'f_groups',
			'id_field'=>'id',
			'id_field_numeric'=>true,
			'parent_category_field'=>NULL,
			'parent_category_meta_aware_type'=>NULL,
			'title_field'=>'g_name',
			'title_field_dereference'=>true,

			'is_category'=>false,
			'is_entry'=>true,
			'seo_type_code'=>NULL,
			'feedback_type_code'=>NULL,
			'permissions_type_code'=>NULL, // NULL if has no permissions
			'view_pagelink_pattern'=>'_SEARCH:groups:view:_WILD',
			'edit_pagelink_pattern'=>'adminzone:admin_ocf_groups:_ed:_WILD',
			'view_category_pagelink_pattern'=>NULL,
			'support_url_monikers'=>true,
			'search_hook'=>NULL,
			'submitter_field'=>'g_group_leader',
			'add_time_field'=>NULL,
			'edit_time_field'=>NULL,
			'validated_field'=>NULL,

			'addon_name'=>'core_ocf',
		);
	}

}
