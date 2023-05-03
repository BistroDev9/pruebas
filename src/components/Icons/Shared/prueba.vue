<script setup>
export default {
  data() {
    return {
      isOptionsExpanded: false,
      selectedOption: "1x",
      options: ["1x", "2x", "3x", "4x or more"]
    };
  },
  methods: {
    setOption(option) {
      this.selectedOption = option;
      this.isOptionsExpanded = false;
    }
  }
};
</script>