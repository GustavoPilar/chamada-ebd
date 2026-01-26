using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChamadaEBD.BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class FixColumnStartHour : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StartFinish",
                table: "ClassRooms",
                newName: "FinishHour");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FinishHour",
                table: "ClassRooms",
                newName: "StartFinish");
        }
    }
}
