locals {
   env = {
      test = {
         ami_id    = "test-ami-id"
         image_tag = "test-image-tag"
      }
      prod = {
         ami_id    = "prod-ami-id"
         image_tag = "prod-image-tag"
      }
   }
}