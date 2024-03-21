'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Step 1: Prepare or Retrieve Related Entities
    const missionTypes = await strapi.entityService.findMany("api::mission-type.mission-type", {});
    const missionTools = await strapi.entityService.findMany("api::mission-tool.mission-tool", {});
    const missionLocations = await strapi.entityService.findMany("api::mission-location.mission-location", {});
  
    // Assuming you have at least one of each entity
    if (!missionTypes.length || !missionTools.length || !missionLocations.length) {
      throw new Error('Required related entities are missing');
    }

    // await strapi.entityService.deleteMany("api::campaign.campaign", {}); // Clear existing campaigns
  
    // Step 2: Create Campaigns with Relations
    for (let i = 0; i < 100; i++) {
      await strapi.entityService.create("api::campaign.campaign", {
        data: {
          name: `Campaign ${i}`,
          text: `Description for campaign ${i}`,
          type: missionTypes[i % missionTypes.length].id, // Example of cycling through mission types
          tools: [missionTools[i % missionTools.length].id], // Assuming tools can be an array, adjust as needed
          location: missionLocations[i % missionLocations.length].id,
        }
      });
    }
  }
};
