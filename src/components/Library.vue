<template>
  <div>
    <v-tabs
      v-model="active"
      color="#00ffa9"
      dark
      slider-color="yellow"
    >
      <v-tab style="color:black;">BOOK</v-tab>
      <v-tab style="color:black;">DVD</v-tab>
      <v-tab-item
        
        :key="1"
      >
        <v-card flat>
          <v-form>
      <v-container>
        <v-layout row wrap>

  
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="ISBN"
              outline
            ></v-text-field>
          </v-flex>
           <v-flex xs12 sm6 md3>
            <v-text-field
              label="Title"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Sector"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Publication"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Authors"
              outline
            ></v-text-field>
          </v-flex>

        </v-layout>
      </v-container>
    </v-form>
        </v-card>
        
      </v-tab-item>
      
       <v-tab-item
        
        :key="2"
      >
        <v-card flat>
           <v-form>
      <v-container>
        <v-layout row wrap>

  
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="ISBN"
              outline
            ></v-text-field>
          </v-flex>
           <v-flex xs12 sm6 md3>
            <v-text-field
              label="Title"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Sector"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Producer"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Actors"
              outline
            ></v-text-field>
          </v-flex>
           <v-flex xs12 sm6 md3>
            <v-text-field
              label="Languages"
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Subtitles"
              outline
            ></v-text-field>
          </v-flex>


        </v-layout>
      </v-container>
       
    </v-form>
        </v-card>
        
        
      </v-tab-item>
      <v-btn @click="submit">Add</v-btn>
      
    </v-tabs>

    
    
  </div>
</template>
